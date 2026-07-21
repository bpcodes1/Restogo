import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

// basename follows vite's `base` (BASE env): '/' on Cloudflare (root domain),
// '/Restogo/' on GitHub Pages previews. See vite.config.ts.
export const createRoot = ViteReactSSG({ routes, basename: import.meta.env.BASE_URL });
