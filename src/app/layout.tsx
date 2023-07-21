import './globals.css';
import importLocalFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { env } from 'process';
import RenderPages from '../components/RenderPages/RenderPages';
import { Metadata } from 'next';

const localFont = importLocalFont({
  src: '../fonts/inter.ttf'
});

const inter = Inter({
  subsets: ['latin'],
  preload: true
});

export const metadata: Metadata = {
  title: 'Talkative'
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
        <RenderPages> {children}</RenderPages>
      </body>
    </html>
  );
}
