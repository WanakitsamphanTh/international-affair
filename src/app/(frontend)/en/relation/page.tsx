import Hero from "@/components/hero";
import Link from "next/link";
import { fetchSchoolListHero, fetchSchoolListTable, fetchSchoolImage, fetchSchoolListHighlight } from "@/app/lib/relation/data";
import { formatDateEn } from "@/app/lib/relation/date";
import Image from "next/image";

async function UniversityTable(){
  const partnerships = await fetchSchoolListTable();

  return (
    <section className="py-5">
      <div className="container">
        <table className="table table-bordered">
          {/* table head */}
          <thead className="table-light">
            <tr>
              <th style={{ width: '20%' }}>Country</th>
              <th style={{ width: '60%' }}>Institution</th>
              <th style={{ width: '20%' }}>Agreement Date</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {partnerships?.map((country, index) =>
              country.universities?.map((uni, j) => (
                <tr key={`${index}-${j}`}>
                  {j == 0 && (
                    <td rowSpan={country.universities?.length} className="align-middle">
                      {country.country_en}
                    </td>
                  )}

                  <td>
                    {(Array.isArray(uni.link) ? uni.link : [uni.link]).map((link, k) => (
                      <Link key={k} href={link ?? ''} className="text-decoration-none">
                        {uni.name_en}
                      </Link>
                    ))}
                  </td>

                  <td>
                    {Array.isArray(uni.agreement_dates) ? (
                      uni.agreement_dates.map((dateString, k) => (
                        <div key={k}>{formatDateEn(dateString)}</div>
                      ))
                    ) : (
                      <div>{formatDateEn(uni.agreement_dates)}</div>
                    )}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

async function Hightlights(){
  const highlights = await fetchSchoolListHighlight();

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

async function WorldwideNetwork(){
  const image = await fetchSchoolImage();
  const isString = typeof image === 'string';

  const src = isString ? image : image?.url ?? '';
  const alt = isString ? image : image?.alt ?? 'Worldwide Network';
  const width = isString ? 1920 : image?.width ?? 1920;
  const height = isString ? 1080 : image?.height ?? 1080;

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Global Network</h2>
        <div className="position-relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="img-fluid rounded shadow"
            />
        </div>
      </div>
    </section>
  )
}

export default async function RelationPage(){
  const data = await fetchSchoolListHero();
  return (
    <main>
      <Hero
        title={data?.hero?.title}
        description={data?.hero?.description}
      />
      <Hightlights/>
      <WorldwideNetwork/>
      <UniversityTable/>
    </main>
  )
}