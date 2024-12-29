import { siteMeta } from "@/lib/ja/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/ja/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

export default function Safety(){
    return (
        <>
        </>
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