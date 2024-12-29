import { siteMeta } from "@/lib/ja/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/ja/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

export default function Scholarship(){
    return (
        <>
        </>
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