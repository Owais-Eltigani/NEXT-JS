import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// ---- *** ----

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'myApp',
  description: 'Generated by create next app',
  // authors: 'myName',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>myNavBar</nav>
        {children}
      </body>
    </html>
  );
}
