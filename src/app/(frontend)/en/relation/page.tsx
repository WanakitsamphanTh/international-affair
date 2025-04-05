import Hero from "@/components/hero";
import Link from "next/link";
import { fetchSchoolListHero, fetchSchoolListTable } from "@/app/lib/relation/data";
import { formatDateEn } from "@/app/lib/relation/date";

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

export default async function RelationPage(){
  const data = await fetchSchoolListHero();
  return (
    <main>
      <Hero
        title={data?.hero?.title}
        description={data?.hero?.description}
      />
      < UniversityTable />
    </main>
  )
}