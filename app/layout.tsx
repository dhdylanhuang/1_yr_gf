// Root layout with global fonts and metadata for the app router.
import type { Metadata } from 'next';
import { Fraunces, Sora } from 'next/font/google';
import './globals.css';

const displayFont = Fraunces({
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
  title: 'Memory Camera',
  description: 'A 3D camera gallery with swipeable memories.'
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
