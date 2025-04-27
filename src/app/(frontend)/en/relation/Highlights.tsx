export type HighlightProps = {
  title: string | string[];
  description: string | string[];
}

export function Highlights({highlights}:{highlights: HighlightProps[]}){
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Partnership Highlights</h2>
        <div className="row g-4">
          {highlights?.map((highlight, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{highlight.title}</h5>
                  <p className="card-text">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}