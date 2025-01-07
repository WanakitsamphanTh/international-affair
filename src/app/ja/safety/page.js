import { siteMeta } from "@/lib/ja/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/ja/baseMetadata";
import Link from "next/link";
import { Content } from "@/app/ja/safety/content";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

function Hero() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">
              海外危機管理
            </h1>
            <p className="lead mb-4">
              派遣先における留学生の安全を確保するための危機管理についての情報を提供しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Safety(){
  return (
    <main>
      <Hero/>
      <Content/>
    </main>
  );
}

// metadata
const pageTitle = "海外危機管理";
const pageDesc = "留学中の危機管理について";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/ja/safety", siteUrl).toString();

export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    url: ogpUrl,
    description: pageDesc,
  },

  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  }
}