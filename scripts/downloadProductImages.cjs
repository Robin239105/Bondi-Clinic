const fs = require('fs');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Read products from the existing file
const productsPath = path.join(__dirname, '../src/data/products.js');
const productsContent = fs.readFileSync(productsPath, 'utf8');

// Extract products array from the file
const productsMatch = productsContent.match(/export const products = (\[[\s\S]*?\]);/);
if (!productsMatch) {
  console.error('Could not find products array in products.js');
  process.exit(1);
}

const products = JSON.parse(productsMatch[1]);

// Create clean filename from product name
function createCleanFilename(productName) {
  return productName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    + '.webp';
}

// Download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Convert image to WebP using cwebp (requires webp package)
async function convertToWebP(inputPath, outputPath) {
  try {
    // Try using sharp if available, otherwise fallback to cwebp
    try {
      const sharp = require('sharp');
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      fs.unlinkSync(inputPath); // Remove original
    } catch (sharpError) {
      // Fallback to cwebp command
      await execAsync(`cwebp -q 85 "${inputPath}" -o "${outputPath}"`);
      fs.unlinkSync(inputPath); // Remove original
    }
  } catch (error) {
    console.warn(`Warning: Could not convert ${inputPath} to WebP, keeping original: ${error.message}`);
    // If conversion fails, rename original to .webp
    const webpPath = inputPath.replace(/\.[^/.]+$/, '.webp');
    if (inputPath !== webpPath) {
      fs.renameSync(inputPath, webpPath);
    }
  }
}

// Main function
async function downloadAllImages() {
  const productsDir = path.join(__dirname, '../public/images/products');
  const downloadResults = [];

  console.log(`Found ${products.length} products to process...\n`);

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const originalUrl = product.image;
    
    if (!originalUrl || !originalUrl.startsWith('http')) {
      console.log(`⏭️  Skipping "${product.name}" - no valid URL`);
      downloadResults.push({
        name: product.name,
        status: 'skipped',
        reason: 'No valid URL'
      });
      continue;
    }

    const cleanFilename = createCleanFilename(product.name);
    const tempPath = path.join(productsDir, `temp_${Date.now()}_${i}`);
    const finalPath = path.join(productsDir, cleanFilename);

    console.log(`📥 [${i + 1}/${products.length}] Downloading: ${product.name}`);

    try {
      // Download image
      await downloadImage(originalUrl, tempPath);
      
      // Convert to WebP
      await convertToWebP(tempPath, finalPath);
      
      // Update product image path
      product.image = `/images/products/${cleanFilename}`;
      
      console.log(`✅ Success: ${cleanFilename}`);
      downloadResults.push({
        name: product.name,
        status: 'success',
        filename: cleanFilename,
        localPath: product.image
      });
    } catch (error) {
      console.error(`❌ Failed: ${product.name} - ${error.message}`);
      downloadResults.push({
        name: product.name,
        status: 'failed',
        error: error.message
      });
      
      // Clean up temp file if it exists
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }

  // Update products.js file
  const updatedContent = `export const products = ${JSON.stringify(products, null, 2)};\n`;
  fs.writeFileSync(productsPath, updatedContent);

  // Print summary
  console.log('\n📊 DOWNLOAD SUMMARY');
  console.log('==================');
  const successful = downloadResults.filter(r => r.status === 'success').length;
  const failed = downloadResults.filter(r => r.status === 'failed').length;
  const skipped = downloadResults.filter(r => r.status === 'skipped').length;
  
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⏭️  Skipped: ${skipped}`);
  console.log(`📁 Images saved to: /public/images/products/`);
  console.log(`📝 Products updated in: /src/data/products.js`);

  if (failed > 0) {
    console.log('\n❌ FAILED DOWNLOADS:');
    downloadResults
      .filter(r => r.status === 'failed')
      .forEach(r => console.log(`   • ${r.name}: ${r.error}`));
  }
}

// Check if required dependencies are available
async function checkDependencies() {
  try {
    require('sharp');
    console.log('✅ Sharp found - using for image conversion');
  } catch (e) {
    console.log('⚠️  Sharp not found, will try cwebp command');
    try {
      await execAsync('cwebp -version');
      console.log('✅ cwebp command available');
    } catch (e) {
      console.log('❌ Neither Sharp nor cwebp found. Install with:');
      console.log('   npm install sharp   # OR');
      console.log('   brew install webp   # macOS');
      process.exit(1);
    }
  }
}

// Run the script
async function main() {
  console.log('🚀 Starting product image download...\n');
  
  await checkDependencies();
  await downloadAllImages();
  
  console.log('\n🎉 Done! Your products now use local images.');
}

main().catch(console.error);
