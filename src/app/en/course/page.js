import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
import Link from "next/link";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

const Hero = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">Courses</h1>
            <p className="lead mb-4">
              Information on courses available for inbounded international students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseInfo = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4">Courses during Exchange</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-3">Japanese Language & Culture Class</h3>
              <p className="text-muted mb-0">
                Immerse yourself in Japanese language and cultural studies during your exchange period.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-3">Research in Labs</h3>
              <p className="text-muted mb-0">
                Explore research opportunities at Sendai KOSEN.{" "}<br/>
                <Link 
                  href="https://www.sendai-nct.ac.jp/english/research/rs-introduction/"
                  className="text-primary text-decoration-none"
                >
                  View available research programs
                  <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExchangeProgram = ({ title, country, additionalInfo, link }) => (
  <div className="card mb-4 border-0 shadow-sm">
    <div className="card-body">
      <h3 className="h4 card-title text-primary">{title}</h3>
      <div className="d-flex align-items-center mb-2">
        <i className="bi bi-geo-alt-fill me-2 text-muted"></i>
        <span className="text-muted">From: {country}</span>
      </div>
      {additionalInfo && <p className="card-text">{additionalInfo}</p>}
      {link && (
        <div className="mt-3">
          <Link 
            href={link.url}
            className="btn btn-outline-primary btn-sm"
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : ""}
          >
            {link.text} {link.external && <i className="bi bi-box-arrow-up-right ms-1"></i>}
          </Link>
        </div>
      )}
    </div>
  </div>
);

const Range = () => {
  const programs = [
    {
      title: "Spring Program (April-July)",
      country: "Finland and France"
    },
    {
      title: "Short Program (May-June)",
      country: "Thailand"
    },
    {
      title: "Internship at Local Companies (September-October)",
      country: "Mongolia",
      additionalInfo: "Past exchange:",
      link: {
        text: "Read about successful Mongolian Kosen students internships",
        url: "https://www.sendai-nct.ac.jp/20191114/",
        external: true
      }
    },
    {
      title: "Autumn Program (September-February)",
      country: "Finland and Kazakhstan"
    }
  ];

  return (
    <section>
      <div className="container py-5">
        <h2 className="text-center mb-5">Exchange Programs</h2>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {programs.map((program, index) => (
              <ExchangeProgram key={index} {...program} />
            ))}
            
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="h4 card-title text-primary">Other Programs</h3>
                <Link 
                  href="https://ssp.jst.go.jp/en/"
                  className="btn btn-outline-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sakura Science Exchange Program <i className="bi bi-box-arrow-up-right ms-1"></i>
                </Link>
              </div>
            </div>
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
        <Range />
        <CourseInfo />
        </>
    );
}

// metadata
const pageTitle = "Courses";
const pageDesc = "Information on courses available for international students.";
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