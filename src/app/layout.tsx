import './globals.css';
import type { Metadata } from 'next';
import importLocalFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { env } from 'process';

const localFont = importLocalFont({
  src: '../fonts/inter.ttf'
});

const inter = Inter({
  subsets: ['latin'],
  preload: true
});

export const metadata: Metadata = {
  title: 'Talkative',
  description: 'A platform to teach students, and learn new languages.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          env.NODE_ENV === 'development'
            ? `${localFont.className}`
            : `${inter.className}`
        }
      >
        {children}
      </body>
    </html>
  );
}
