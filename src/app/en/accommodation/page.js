import { Link as LucideLink} from 'lucide-react';
import { SchoolDormitories } from "@/app/en/accommodation/dormlist";
import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

const Hero = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">Accommodations</h1>
            <p className="lead mb-4">
              Both Hirose Campus and Natori Campus have their own dormitories
              for those coming from remote places. Other options are also available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PrivateHousing = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="h3 mb-4">Private Housing: Urban Castle Kawaguchi</h2>
            <p className="lead mb-4">
              If you look for an accommodation outside the campus, there is one for international exchange students.
            </p>
            <a 
              href="https://www.uc-kawauchi.com/en/" 
              className="btn btn-outline-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LucideLink size={18} className="me-2" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Accommodation = () => {
  return (
    <main>
      <Hero />
      <SchoolDormitories />
      <PrivateHousing />
    </main>
  );
};

export default Accommodation;


// metadata
const pageTitle = "Accommodation";
const pageDesc = "Information on dormitories and private housing for international students.";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/en/accommodation", siteUrl).toString();

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
