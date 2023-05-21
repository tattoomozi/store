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
      <header className={inter.className}>
        <nav className="navigationbar">
          <Link href="/">Home</Link>
          <Link href="Products/Livestock" data-test-id="products-link">
            Livestock
          </Link>
          <Link href="Products/Rarities">Rarities</Link>
          <Link href="Products/Upgrades">Upgrades</Link>
          <Link href="Products/Storage">Storage</Link>
          <Link href="Products/Cart">Cart</Link>
        </nav>
        {children}
      </header>
    </html>
  );
}
