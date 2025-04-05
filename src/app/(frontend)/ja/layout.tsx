import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer';
import Navigationbar from '@/components/navbar/navbar-ja';
import {Inter, Noto_Sans_JP} from 'next/font/google';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

// fonts
const notoSansJP = Noto_Sans_JP({subsets: ['latin']});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Navigationbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
