import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const rootDir = path.resolve('.');

async function processImages() {
  console.log('--- 1. Conversion des images de public/ en WebP ---');
  const files = fs.readdirSync(publicDir);
  const jpgFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

  for (const file of jpgFiles) {
    const inputPath = path.join(publicDir, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(publicDir, `${baseName}.webp`);

    console.log(`Conversion : ${file} -> ${baseName}.webp`);
    await sharp(inputPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath);
    
    // Supprime l'original jpg dans public/
    fs.unlinkSync(inputPath);
    console.log(`Supprimé : ${inputPath}`);
  }

  console.log('--- 2. Nettoyage des images orphelines à la racine ---');
  const rootFiles = fs.readdirSync(rootDir);
  const rootJpgs = rootFiles.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));

  for (const file of rootJpgs) {
    const p = path.join(rootDir, file);
    fs.unlinkSync(p);
    console.log(`Supprimé orphelin racine : ${file}`);
  }

  console.log('--- Terminé avec succès ! ---');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
