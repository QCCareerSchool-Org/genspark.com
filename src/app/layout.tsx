import { Open_Sans } from 'next/font/google';

import './globals.css'
import style from './layout.module.css';

type Props = {
  children: React.ReactNode
}

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Genspark Consulting',
}

import Logo from '../images/genspark-logo.svg';
import Image from 'next/image';

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <header className={style.header}>
          <div className="wrapper">
            <Image src={Logo} width={253} height={32} priority style={{ display: 'block', margin: '1rem 0'  }} alt="Genspark Consulting" />
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
  )
}
