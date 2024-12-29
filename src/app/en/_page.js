import Hero from "@/components/hero";
import React from "react";
import Image from "next/image";

export default function Home() {
  const image = {
    src: "/home.png",
    alt: "Sendai KOSEN Hero Image"
  };
  
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src={image.src}
              alt={image.alt}
              className="d-block mx-lg-auto img-fluid rounded"
              width={1400}
              height={1000}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              International Affairs Section
            </h1>
            <p className="lead">Welcome to Sendai KOSEN</p>
            <p className="lead">We are determined to make our exchange programs inspiring and meaningful for both the international students we welcome here and our domestic students. We greatly appreciate your interest in Sendai KOSEN.</p>
            <p className="lead">International Affairs Section takes care of international exchange students for short period within a half year, organises international events, and handles scholarship procedures.</p>
          </div>
        </div>
      </div>
    </>
  );
}