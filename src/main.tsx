import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// En développement Vite ou si aucun contenu HTML réel n'est pré-rendu, utiliser createRoot.
// En production SSG (après build avec DOM réel injecté), utiliser hydrateRoot.
const hasRealPrerenderedDom = import.meta.env.PROD && container.firstElementChild !== null;

if (hasRealPrerenderedDom) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
