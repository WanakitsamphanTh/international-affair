import Image from "next/image";
import relationship from "@/images/relationship.png";

function Hero() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">International Partnerships & Global Education</h1>
            <p className="lead mb-4">
              Building bridges across continents through academic excellence and cultural exchange.
              Discover our worldwide network of partner institutions.
            </p>
            <div className="row g-4 py-3">
              <div className="col-md-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-globe fs-4 text-primary me-2"></i>
                  <span>9 Countries</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-building fs-4 text-primary me-2"></i>
                  <span>20 Universities and Colleges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnershipHighlights() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Partnership Highlights</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people-fill fs-4 text-primary me-2"></i>
                  <h5 className="card-title mb-0">Student Exchange Programs</h5>
                </div>
                <p className="card-text">
                  Opportunities for students to study abroad at partner institutions,
                  gaining international experience and cultural understanding.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-book fs-4 text-primary me-2"></i>
                  <h5 className="card-title mb-0">Research Collaboration</h5>
                </div>
                <p className="card-text">
                  Joint research projects and academic partnerships fostering
                  innovation and knowledge sharing across borders.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-globe2 fs-4 text-primary me-2"></i>
                  <h5 className="card-title mb-0">Global Initiatives</h5>
                </div>
                <p className="card-text">
                  Special programs and events promoting international cooperation
                  and cultural exchange between partner institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorldwideNetwork() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Global Network</h2>
        <div className="position-relative">
          <Image
            src={relationship}
            alt="Global partnership network"
            width={1521}
            height={947}
            className="img-fluid rounded shadow"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function UniversityTable() {
  const partnerships = [
    {
      country: "South Korea",
      institutions: [
        {
          name: "Inha Technical College",
          url: "https://www.inha.ac.kr/eng/index..do",
          agreements: "October 1, 2009"
        },
        {
          name: "Chungwoon University",
          url: "https://home.chungwoon.ac.kr/english/index.do",
          agreements: "October 1, 2009"
        }
      ]
    },
    {
      country: "Thailand",
      institutions: [
        {
          name: "King Mongkut's Institute of Technology Ladkrabang",
          url: "https://www.kmitl.ac.th/",
          agreements: "March 10, 2006"
        },
        {
          name: "KOSEN-KMITL",
          url: "http://www.kosen.kmitl.ac.th/en",
          agreements: "March 25, 2021"
        },
        {
          name: "Princess Chulabhorn Science High School, Satun",
          url: "http://www.pccst.ac.th/",
          agreements: "June 4, 2021"
        },
        {
          name: "Princess Chulabhorn Science High School, Lopburi",
          url: "http://www.pccpl.ac.th/",
          agreements: "June 4, 2021"
        }
      ]
    },
    {
      country: "Taiwan",
      institutions: [
        {
          name: "Tamkang University",
          url: "https://english.tku.edu.tw/",
          agreements: "January 5, 2021"
        }
      ]
    },
    {
      country: "Mongolia",
      institutions: [
        {
          name: "Mongolian National Association of Colleges of Technology",
          url: "https://www.kosen-k.go.jp/en/global/mongolia",
          agreements: "October 23, 2017"
        }
      ]
    },
    {
      country: "Kazakhstan",
      institutions: [
        {
          name: "Almaty University of Power Engineering and Telecommunications",
          url: "https://aues.edu.kz/en",
          agreements: "February 6, 2018"
        }
      ]
    },
    {
      country: "Malaysia",
      institutions: [
        {
          name: "Universiti Malaysia Terengganu",
          url: "https://www.umt.edu.my/",
          agreements: "February 7, 2019"
        }
      ]
    },
    {
      country: "Germany",
      institutions: [
        {
          name: "Felix-Fechenbach-Berufskolleg",
          url: "https://www.ffb-lippe.de/",
          agreements: "October 1, 2009"
        }
      ]
    },
    {
      country: "Finland",
      institutions: [
        {
          name: "Metropolia University of Applied Sciences",
          url: "https://www.metropolia.fi/en",
          agreements: "October 1, 2009"
        },
        {
          name: "Turku University of Applied Sciences",
          url: "https://www.turkuamk.fi/en/",
          agreements: "October 1, 2009"
        },
        {
          name: "Oulu University of Applied Sciences",
          url: "https://oamk.fi/en/",
          agreements: "March 24, 2015"
        }
      ]
    },
    {
      country: "France",
      institutions: [
        {
          name: "Institut Universitaire de Technologie A de Lille",
          url: "https://iut.univ-lille.fr/",
          agreements: "October 1, 2009"
        },
        {
          name: "Universite d'Artois",
          url: "https://www.univ-artois.fr/",
          agreements: "June 24, 2012"
        },
        {
          name: "Institut Universitaire de Technologie de Blois",
          url: "https://iut-blois.univ-tours.fr/",
          agreements: "January 13, 2016"
        },
        {
          name: "Institut Universitaire de Technologie du Havre",
          url: "https://www.univ-lehavre.fr/",
          agreements: "March 1, 2016"
        },
        {
          name: "Institut Universitaire de Technologie du littoral Cote d'Opale",
          url: "http://www.iut.univ-littoral.fr/",
          agreements: "May 31, 2016"
        },
        {
          name: "Institut Universitaire de Technologie de Valenciennes",
          url: "https://www.uphf.fr/iut",
          agreements: "July 20, 2017"
        }
      ]
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th style={{width: "20%"}}>Country</th>
              <th style={{width: "50%"}}>Institution</th>
              <th style={{width: "30%"}}>Agreement Date</th>
            </tr>
          </thead>
          <tbody>
            {partnerships.map((country, countryIndex) => (
              country.institutions.map((institution, instIndex) => (
                <tr key={`${countryIndex}-${instIndex}`}>
                  {instIndex === 0 && (
                    <td rowSpan={country.institutions.length}>
                      {country.country}
                    </td>
                  )}
                  <td>
                    <a 
                      href={institution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none link-primary"
                    >
                      {institution.name}
                      <i className="bi bi-box-arrow-up-right ms-1" style={{fontSize: "0.8em"}}></i>
                    </a>
                  </td>
                  <td>{institution.agreements}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Relation() {
  return (
    <main>
      <Hero />
      <PartnershipHighlights />
      <WorldwideNetwork />
      <UniversityTable />
    </main>
  );
}