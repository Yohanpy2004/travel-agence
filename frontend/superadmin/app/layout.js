// app/layout.js
import './globals.css';
import { MenuProvider } from './context/MenuContext';

export const metadata = {
  title: 'Travelo',
  description: 'Description de votre site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">  {/* Balise <html> pour spécifier la langue */}
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <MenuProvider>
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
