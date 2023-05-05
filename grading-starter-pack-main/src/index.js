import { StrictMode } from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'typeface-montserrat';

import { App } from "../src/components/App/App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
