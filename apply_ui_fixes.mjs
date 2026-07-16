import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Border radius
  content = content.replace(/rounded-(2xl|3xl|xl|lg|md|sm|full)/g, 'rounded-[4px]');

  // 2. Tracking
  content = content.replace(/tracking-\[0\.[0-9]+em\]/g, 'tracking-[0.12em]');
  content = content.replace(/tracking-widest|tracking-wider|tracking-wide/g, 'tracking-[0.12em]');

  // 3. Image -> WarmImage
  // Only if <Image is used
  if (content.includes('<Image') && !filePath.includes('WarmImage.tsx')) {
    content = content.replace(/import Image.*from ['"]next\/image['"];?/g, 'import WarmImage from "@/components/UI/WarmImage";');
    content = content.replace(/<Image\b/g, '<WarmImage');
    content = content.replace(/<\/Image>/g, '</WarmImage>');
  }

  // 4. Hover translate
  content = content.replace(/hover:-translate-y-[0-9\.]+/g, 'hover:-translate-y-1');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir('./src/app');
walkDir('./src/components');
console.log('Done!');
