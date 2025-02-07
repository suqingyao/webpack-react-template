import { createRoot } from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router';
import routes from './routes';

import './styles/index.scss';

const App = () => useRoutes(routes);

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
