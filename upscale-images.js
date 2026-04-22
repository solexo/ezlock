import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images', 'upscaled');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(inputDir).filter(file =>
  /\.(webp|jpeg|jpg|png)$/i.test(file)
);

console.log(`Found ${imageFiles.length} images to upscale.`);

imageFiles.forEach(async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    // Get original dimensions
    const metadata = await sharp(inputPath).metadata();
    const newWidth = Math.round(metadata.width * 2); // 2x upscale
    const newHeight = Math.round(metadata.height * 2);

    await sharp(inputPath)
      .resize(newWidth, newHeight, {
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: false
      })
      .webp({ quality: 85 }) // Convert to webp if not already, maintain quality
      .toFile(outputPath);

    console.log(`Upscaled ${file} from ${metadata.width}x${metadata.height} to ${newWidth}x${newHeight}`);
  } catch (error) {
    console.error(`Error upscaling ${file}:`, error.message);
  }
});

console.log('Upscaling complete. Check public/images/upscaled/ for results.');