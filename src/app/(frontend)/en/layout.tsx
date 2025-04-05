import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer';
import Navigationbar from '@/components/navbar/navbar-en';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navigationbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
