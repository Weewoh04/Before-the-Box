import './globals.css';

export const metadata = {
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
      <body>{children}</body>
    </html>
  );
}
