import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pantip - Learn, Share & Fun',
  icons: '/icon/web-logo.png',
  openGraph: {
    title: 'Pantip - Learn, Share & Fun',
    siteName: 'Pantip',
    images: [
      {
        url: 'https://pantip-new-ui.vercel.app/web-screen.png',
        width: 800,
        height: 500,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
