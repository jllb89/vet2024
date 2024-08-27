import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Call a Vet - Únete a nuestra plataforma',
  description: 'Plataforma para unirse como veterinario, centro de atención o proveedor en Call a Vet.',
  keywords: 'veterinario, centro de atención, proveedor, unirse, Call a Vet',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://call-a-vet.com',
    title: 'Call a Vet - Únete a nuestra plataforma',
    description: 'Plataforma para unirse como veterinario, centro de atención o proveedor en Call a Vet.',
    images: [
      {
        url: 'https://call-a-vet.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Call a Vet',
      },
    ],
  },
  twitter: {
    site: '@callavet',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#14101A" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
