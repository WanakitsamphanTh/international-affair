import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
import Link from "next/link";
import Image from "next/image";
import { Content } from "@/app/en/activities/content";

const {siteTitle, siteUrl, siteIcon} = siteMeta;

const Hero = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 lead fw-bold mb-3">Exchange Activities</h1>
            <p className="lead mb-4">
              We have plenty of activities for you to enjoy during your exchange period. You can have chat with local students, join clubs, and participate in various events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Courses(){
    return (
        <>
        <Hero />
        <Content />
        </>
    );
}

// metadata
const pageTitle = "Activities";
const pageDesc = "Information on activities available for inbounded international students.";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/en/course", siteUrl).toString();

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