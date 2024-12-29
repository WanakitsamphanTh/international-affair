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
          <p className="lead mb-4" style={{textAlign: "justify"}}>
            We are determined to make our exchange programs inspiring and meaningful for all the international students we welcome here.
            <br/>We greatly appreciate your interest in our college.
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

function LatestNews() {
  const news = [
    {
      date: "December 20, 2024",
      title: "Spring Exchange Program Applications Now Open",
      description: "Applications for our Spring 2025 exchange program are now being accepted. Deadline: January 31, 2025."
    },
    {
      date: "December 15, 2024",
      title: "International Cultural Festival Success",
      description: "Over 200 students participated in our annual International Cultural Festival, showcasing global traditions."
    },
    {
      date: "December 10, 2024",
      title: "New Partnership Announcement",
      description: "Sendai KOSEN establishes new partnership with leading technical institution in Europe."
    }
  ];

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
                  <a href="#" className="text-decoration-none">Read more →</a>
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