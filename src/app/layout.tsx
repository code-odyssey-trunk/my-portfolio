import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SocialBar from './components/layout/SocialBar';
import Navbar from './components/layout/Navbar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jasim Zainudheen | Software Developer',
  description:
    'Portfolio of Jasim Zainudheen, a fullstack developer based in Munich, Germany',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-gray-900 text-gray-200 max-w-[100vw] overflow-x-hidden`}
      >
        <Navbar />
        <SocialBar />
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
