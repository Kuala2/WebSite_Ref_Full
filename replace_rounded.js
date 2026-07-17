const fs = require('fs');
const path = require('path');

function replaceRounded(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceRounded(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('rounded-[4px]')) {
        content = content.replace(/rounded-\[4px\]/g, 'rounded-sm');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Replaced rounded-[4px] in', fullPath);
      }
    }
  }
}

replaceRounded('./src');
console.log('Done!');
