import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes';
import {} from "./index.css"
import { CartProvider } from './context/CartProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme>
        <CartProvider>
          <App /> 
        </CartProvider>
      </Theme>
    </QueryClientProvider>
  </StrictMode>,
)
