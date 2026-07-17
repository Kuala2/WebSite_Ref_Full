import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const map = {
  'kigwe8kigwe8kigw.png': 'work_airtouch.webp',
  '3l390e3l390e3l39.png': 'work_blonde.webp',
  's01hs4s01hs4s01h.png': 'work_bob.webp',
  '4dn0d64dn0d64dn0.png': 'work_crop.webp',
  'c67682c67682c676.png': 'work_nude.webp',
  '826l1x826l1x826l.png': 'work_french.webp',
  'fowdwlfowdwlfowd.png': 'work_powder.webp',
  '532b7q532b7q532b.png': 'work_lashes.webp',
  '410v8r410v8r410v.png': 'team-4.webp',
  'iwb710iwb710iwb7.png': 'team-5.webp',
  'q5otm3q5otm3q5ot.png': 'team-6.webp'
};

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function run() {
  for (const [srcFile, destFile] of Object.entries(map)) {
    const srcPath = path.join(imagesDir, `Gemini_Generated_Image_${srcFile}`);
    const destPath = path.join(imagesDir, destFile);
    try {
      await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
      console.log(`Converted ${srcFile} to ${destFile}`);
      // Remove original
      await fs.unlink(srcPath);
    } catch (e) {
      console.error(`Error converting ${srcFile}:`, e.message);
    }
  }
}

run();
