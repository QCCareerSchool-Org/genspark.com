// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';

import style from './layout.module.css';
import Logo from '@/images/genspark-logo.svg';
import './globals.css';

type Props = {
  children: ReactNode;
};

const openSans = Open_Sans({
  weight: [ '400', '700' ],
  subsets: [ 'latin' ],
});

export const metadata = {
  title: 'Genspark Consulting',
};

export default function RootLayout({ children }: Props): ReactNode {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <header className={style.header}>
          <div className="wrapper">
            <Image src={Logo as StaticImageData} width={253} height={32} priority style={{ display: 'block', margin: '1rem 0' }} alt="Genspark Consulting" />
            <div style={{ borderTop: '1px solid #acb0b4' }} />
          </div>
        </header>
        <main className={style.main}>
          {children}
        </main>
        <footer className={style.footer}>
          <div className="wrapper">
            &copy; {new Date().getFullYear()} Genspark Consulting
          </div>
        </footer>
      </body>
    </html>
  );
}
