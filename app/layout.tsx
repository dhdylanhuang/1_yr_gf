// Root layout with global fonts and metadata for the app router.
import type { Metadata } from 'next';
import { Playfair_Display, Sora } from 'next/font/google';
import './globals.css';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700']
});

const bodyFont = Sora({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '600']
});

export const metadata: Metadata = {
  title: 'Happy 1 Year Beb <3',
  description: 'Our year together in memories and moments.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body text-charcoal bg-cream">
        {children}
      </body>
    </html>
  );
}
