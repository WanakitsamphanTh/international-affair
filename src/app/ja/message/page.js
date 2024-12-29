import { siteMeta } from "@/lib/ja/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/ja/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

export default function Courses(){
    return (
        <>
        </>
    );
}

// metadata
const pageTitle = "先輩からのメッセージ";
const pageDesc = "留学経験があった先輩からのメッセージ";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/ja/message", siteUrl).toString();

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