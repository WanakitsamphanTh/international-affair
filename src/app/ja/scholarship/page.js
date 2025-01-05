import { siteMeta } from "@/lib/ja/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/ja/baseMetadata";
import {CardExample, Information} from "@/app/ja/scholarship/content";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

function Hero(){
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold mb-3">
            留学サポート・奨学金情報
          </h1>
          <p className="lead mb-4">
            仙台高専留学プログラムに参加する学生には、留学サポートや奨学金の情報を提供しています。<br/>奨学金は、留学にかかる費用を支援するための資金です。
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Scholarship(){
    return (
        <main>
          <Hero />
          <CardExample />
          <Information />
        </main>
    );
}

// metadata
const pageTitle = "奨学金情報";
const pageDesc = "留学に支援する奨学金の情報";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/ja/scholarship", siteUrl).toString();

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