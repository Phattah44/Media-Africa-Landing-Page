import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Media Africa',
  description:
    'Your number one Web3 Marketing Platform to penetrate African Market',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <body className={inter.className}>{children}</body>
      </body>
    </html>
  );
}
