import { ImageInfo } from "@/app/lib/dataType";
import Image from "next/image";

export type HeroProps = {
  title: string;
  description: string;
  image?: ImageInfo;
};

export function HomeHero({ title, description, image }: HeroProps) {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            src={image?.url || "/placeholder-image.jpg"}
            alt={image?.alt || "Default alt text"}
            className="d-block mx-lg-auto img-fluid rounded shadow-lg"
            width={image?.width}
            height={image?.height}
            priority
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-4">
            {title}
          </h1>
          <p className="lead mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero({ title, description, image }: HeroProps) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">{title}</h1>
            <p className="lead mb-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}