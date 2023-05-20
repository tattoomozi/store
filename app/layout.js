import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: {
    default: 'Welcome Samurai | For this life or another',
    template: '%s | Malfunction',
  },
  description: 'For this life or another, we will meet again',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navigationbar">
          <Link href="/">Home</Link>
          <Link href="/Livestock">Livestock</Link>
          <Link href="/Rarities">Rarities</Link>
          <Link href="/Upgrades">Upgrades</Link>
          <Link href="/Storage">Storage</Link>
          <Link href="/Cart">Cart</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
