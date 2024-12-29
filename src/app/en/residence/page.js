import React from 'react';
import { FileCheck, FilePenLine, Building2, Plane, Hospital } from 'lucide-react';
import Link from 'next/link';
import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

function Hero() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">Visa Application & Residence Permit</h1>
            <p className="lead mb-4">
              Applying for a visa and residence permit can be a daunting task. Follow our step-by-step guide to ensure a smooth application process.
            </p>
            <div className="alert alert-info" role="alert">
              <i className="bi bi-info-circle me-2"></i>
              Make sure to start your visa application process at least 2-3 months before your planned arrival date.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Content = () => {
  const steps = [
    {
      icon: <FileCheck className="text-primary mb-3 text-black" size={32} />,
      title: "Check your period of stay",
      content: (
        <>
          <p className="mb-3">Please consult your contact person in Sendai KOSEN and check your period of stay:</p>
          <div className="card mb-3">
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="bi bi-check2 text-success me-2"></i>
                  Over 3 months: Student visa required
                </li>
                <li>
                  <i className="bi bi-check2 text-success me-2"></i>
                  Under 3 months: Short-Term Stay visa
                </li>
              </ul>
            </div>
          </div>
          <p><Link href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">Check visa exemption countries/regions for Short-Term Stay</Link></p>
        </>
      )
    },
    {
      icon: <FilePenLine className="text-primary mb-3 text-black" size={32} />,
      title: "Prepare your documents",
      content: (
        <>
          <p className="mb-3">Certificate of Eligibility (CoE) is required for visa application. Prepare the following:</p>
          <div className="card mb-3">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-file-earmark-text me-3"></i>
                  <Link href="https://www.moj.go.jp/isa/content/930004044.pdf">CoE Application form</Link>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-camera me-3"></i>
                  Face photo 4x3 in PDF format
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-passport me-3"></i>
                  Copy of passport
                </li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      icon: <Building2 className="text-primary mb-3 text-black" size={32} />,
      title: "Apply for Visa at Embassy of Japan",
      content: (
        <div className="alert alert-warning" role="alert">
          <i className="bi bi-clock-history me-2"></i>
          Processing time varies by embassy. Contact your local Japanese embassy for specific requirements and processing times.
        </div>
      )
    },
    {
      icon: <Plane className="text-primary mb-3 text-black" size={32} />,
      title: "Submit your documents at immigration",
      content: (
        <>
          <p className="mb-3">Upon arrival in Japan:</p>
          <div className="card mb-3">
            <div className="card-body">
              <ol className="mb-0">
                <li className="mb-2">Submit your visa at immigration</li>
                <li className="mb-2">Complete pre-registration on <Link href="https://services.digital.go.jp/en/visit-japan-web/">Visit Japan Web</Link></li>
                <li>Follow immigration and customs procedures</li>
              </ol>
            </div>
          </div>
        </>
      )
    },
    {
      icon: <Hospital className="text-primary mb-3 text-black" size={32} />,
      title: "Prepare private health insurance in advance",
      content: (
        <div className="alert alert-danger" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          Take out private medical insurance (including travel insurance covering medical expenses during one’s period of stay in Japan) before entry into Japan.
        </div>
      )
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {steps.map((step, index) => (
              <div key={index} className="mb-5">
                <div className="d-flex align-items-bottom mb-3">
                  {step.icon}
                  <h2 className="h3 mb-0 ms-3">{step.title}</h2>
                </div>
                {step.content}
              </div>
            ))}

            <div className="card bg-light mt-5">
              <div className="card-body">
                <h3 className="h4 mb-3">Need Help?</h3>
                <p className="mb-3">If you have any questions about the visa application process, please contact:</p>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="bi bi-envelope me-2"></i>
                    Email: renkei@sendai.kosen-ac.jp
                  </li>
                  <li>
                    <i className="bi bi-telephone me-2"></i>
                    Phone: +81-22-391-5517
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function Residence() {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
}

// metadata
const pageTitle = "Residence Permit";
const pageDesc = "Apply for a visa or residence permit to Japan";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/en/residence", siteUrl).toString();

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