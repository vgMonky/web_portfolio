const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = './projects'; // Input directory containing projects and images
const maxWidth = 800; // Maximum width of resized images
const quality = 100; // Quality level for JPEG images (0-100)
const pngQuality = 9; // Quality level for PNG images (0-9)

// Function to resize an image
const resizeImage = (inputPath) => {
  const directory = path.dirname(inputPath);
  const extension = path.extname(inputPath).toLowerCase();
  const basename = path.basename(inputPath, extension);
  const newPath = path.join(directory, `${basename}.jpg`);

  const pipeline = sharp(inputPath).resize({ width: maxWidth });

  pipeline.jpeg({ quality });

  pipeline
    .toBuffer((err, buffer) => {
      if (err) {
        console.error(`Error resizing ${inputPath}: ${err}`);
        return;
      }
      fs.writeFile(newPath, buffer, (writeErr) => {
        if (writeErr) {
          console.error(`Error writing ${newPath}: ${writeErr}`);
        } else {
          console.log(`Resized and renamed ${inputPath} to ${newPath}`);
          if (inputPath !== newPath) {
            fs.unlink(inputPath, (unlinkErr) => {
              if (unlinkErr) {
                console.error(`Error deleting original file ${inputPath}: ${unlinkErr}`);
              }
            });
          }
        }
      });
    });
};

// Function to recursively process directories
const processDirectory = (directory) => {
  fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`Error reading directory ${directory}: ${err}`);
      return;
    }

    entries.forEach(entry => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        processDirectory(fullPath);
      } else {
        const extension = path.extname(entry.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(extension)) {
          resizeImage(fullPath);
        }
      }
    });
  });
};

// Start processing from the input directory
processDirectory(inputDir);
