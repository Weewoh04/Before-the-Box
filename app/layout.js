import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://before-the-box.vercel.app'),
  title: 'Before the Box | Make the thing. Skip the label.',
  description: 'Simple from-scratch recipes for pantry staples, kitchen basics, snacks, home goods, and everyday swaps.',
  openGraph: {
    title: 'Before the Box',
    description: 'Make the thing. Skip the label.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
