import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'X7 Trading Gateway | Aurora Minimal',
  description: 'AI-Powered Hyperliquid DEX Trading Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-slate-950`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
