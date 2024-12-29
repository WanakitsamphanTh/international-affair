import Image from 'next/image';

export default function Hero({ image, title, description}) {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            src={image.src}
            alt={image.alt}
            className="d-block mx-lg-auto img-fluid"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {title}
          </h1>
          <p className="lead">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}