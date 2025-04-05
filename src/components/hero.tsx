type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">{title}</h1>
            <p className="lead mb-4" style={{ textAlign: 'justify' }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}