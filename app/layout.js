import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="px-16 py-8  border-b">
          <ul className="flex items-center gap-4">
            <li className="border-r-2 pr-4">
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
          </ul>
        </nav>
        <div className="px-16 pt-8">{children}</div>
      </body>
    </html>
  );
}
