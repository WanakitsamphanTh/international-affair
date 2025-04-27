import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import Navigationbar from '@/components/navbar/Navbar-en';
import { Noto_Sans_JP } from 'next/font/google';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const notoSansJP = Noto_Sans_JP({subsets: ['latin']});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        <Navigationbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
