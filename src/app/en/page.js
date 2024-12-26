import Hero from "@/components/hero";
import React from "react";

export default function Home() {
  const image = {
    src: "/home.png",
    alt: "Sendai KOSEN Hero Image"
  };

  const title = "International Affairs Section";
  const description = "Welcome to Sendai KOSEN We are determined to make our exchange programs inspiring and meaningful for both the international students we welcome here and our domestic students.\n\n We greatly appreciate your interest in Sendai KOSEN. International Affairs Section takes care of international exchange students for short period within a half year, organises international events, and handles scholarship procedures.";

  return (
    <>
      <Hero image={image} title={title} description={description}/>
    </>
  );
}