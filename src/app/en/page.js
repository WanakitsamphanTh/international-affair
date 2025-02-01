import React from "react";
import Image from "next/image";
import homeimg from "@/images/home.png";

function Hero() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            src={homeimg}
            alt="Sendai KOSEN Hero Image"
            className="d-block mx-lg-auto img-fluid rounded shadow-lg"
            width={1400}
            height={1000}
            priority
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-4">
            International Affairs Section
          </h1>
          <p className="lead fw-bold mb-4">Welcome to Sendai KOSEN</p>
          <p className="lead mb-4" style={{ textAlign: "justify" }}>
            We are determined to make our exchange programs inspiring and meaningful for all the international students we welcome here.
            <br />We greatly appreciate your interest in our college.
          </p>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row g-4 py-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">9</div>
            <div className="h5">Partner Countries</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">20+</div>
            <div className="h5">Partner Institutions</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">80</div>
            <div className="h5">Exchange Students Accepted since 2021</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">15</div>
            <div className="h5">Outbound students (2023)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getLatestNews(number) {
  const news = [
    {
      date: "December 13, 2024",
      title: "A One-Month Training Program For Thai Teachers and Staff",
      description: "A total of 19 participants, including 9 teachers and staff members from KOSEN-KMTIL, another 9 from KOSEN KMUTT and an interpreter visited Sendai KOSEN",
      link: "https://www.facebook.com/International.NITSC/posts/pfbid02sxjFeC7wbPkmdboxRdXFSvDkTpJp3xmp4RhECEo5PDvpTRjnTa2k9x4tWS86h3JPl"
    },
    {
      date: "October 8, 2024",
      title: "Welcome our exchange students",
      description: "Two short-term exchange students came to National Institute of Technology, Sendai College for a 5-month program, both from Finland, Metropolia University of Applied Sciences and Oulu University of Applied Sciences.",
      link: "https://www.facebook.com/International.NITSC/posts/pfbid02U4xmEYHhWftMEEynHscwvnH9vsVApfkjqe5Qv3m79W9u3SXyUHop9gVdrFrbvxd2l"
    },
    {
      date: "October 1, 2024",
      title: "Cross-cultural Exchange Program in Penang",
      description: "One hundred and seventy students from Toyohashi University of technology and colleges of technology all over Japan participated in the one to two-week program. ",
      link: "https://www.facebook.com/International.NITSC/posts/pfbid02r2niGTWx1kAUegz8YPdb9g7uiY9HEaVzg7HXYXGykimd8iGbSWBCVft5cfjHfqGZl"
    }
  ];

  return news;
}

function LatestNews() {

  const news = getLatestNews(3);
  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Latest News</h2>
        <div className="row g-4">
          {news.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-muted mb-2">{item.date}</div>
                  <h5 className="card-title mb-3">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.link} className="text-decoration-none">Read more on Facebook</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <LatestNews />
    </main>
  );
}