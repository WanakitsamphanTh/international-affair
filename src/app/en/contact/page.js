import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

export default function Contact(){
    return (
        <>
        </>
    )
}

// metadata
const pageTitle = "Contact";
const pageDesc = "Contact information for the International Affairs Section.";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/en/contact", siteUrl).toString();

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