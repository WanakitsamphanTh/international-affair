import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

export default function Message(){
    return (
        <>
        </>
    )
}

// metadata
const pageTitle = "Messages";
const pageDesc = "Messages from international students.";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/en/message", siteUrl).toString();

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