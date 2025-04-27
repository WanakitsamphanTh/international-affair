import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import Navigationbar from '@/components/navbar/Navbar-en';
import { Noto_Sans_JP } from 'next/font/google';
import { baseMetadata, openGraphMetadata, twitterMetadata } from '@/lib/baseMetadata';

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...openGraphMetadata,
  },
  twitter: {
    ...twitterMetadata,
  },
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
