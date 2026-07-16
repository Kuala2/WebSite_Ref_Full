const fs = require('fs');
const path = require('path');

function removeGrayscale(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeGrayscale(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('grayscale')) {
        content = content.replace(/\bgrayscale\b/g, '');
        // Clean up double spaces that might be left inside className strings
        content = content.replace(/  +/g, ' ');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Removed grayscale from', fullPath);
      }
    }
  }
}

removeGrayscale('./src/app');
removeGrayscale('./src/components');
console.log('Done!');
