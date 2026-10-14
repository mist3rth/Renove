import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

async function prerender() {
  console.log('⚡ [SSG] Démarrage du pré-rendu statique...');
  
  const templatePath = toAbsolute('dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template non trouvé: ${templatePath}`);
  }
  
  const template = fs.readFileSync(templatePath, 'utf-8');
  const serverEntryPath = toAbsolute('dist/server/entry-server.js');
  
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Bundle serveur non trouvé: ${serverEntryPath}`);
  }
  
  // Import dynamique de la fonction render
  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const { html: appHtml } = render();
  
  if (!appHtml) {
    throw new Error('Le rendu SSG a renvoyé un contenu vide.');
  }

  // Remplacement du marqueur <!--app-html--> par le HTML pré-rendu
  const finalHtml = template.replace('<!--app-html-->', appHtml);
  fs.writeFileSync(templatePath, finalHtml, 'utf-8');
  
  console.log(`✅ [SSG] dist/index.html généré avec succès avec le DOM statique complet (${Math.round(finalHtml.length / 1024)} Ko) !`);
  
  // Suppression du dossier temporaire dist/server pour garder un dossier dist propre
  fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true });
  console.log('🧹 [SSG] Nettoyage dist/server effectué.');
}

prerender().catch((err) => {
  console.error('❌ [SSG] Erreur lors du pré-rendu :', err);
  process.exit(1);
});
