import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from '@/components/BootstrapClient.js';
import NavigationBar from "@/components/navbar/en";
import Footer from "@/components/footer";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { baseMetadata, openGraphMetadata, twitterMetadata, viewport } from "@/lib/en/baseMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...openGraphMetadata,
  },
  twitter: {
    ...twitterMetadata,
  },
}

export {viewport};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavigationBar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
