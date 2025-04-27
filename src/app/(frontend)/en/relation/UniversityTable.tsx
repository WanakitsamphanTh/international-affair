import Link from 'next/link';

type University = {
  name_jp: string;
  name_en: string;
  agreement_dates: string;
  link?: string;
}

export type Partnership = {
  country_jp: string;
  country_en: string;
  universities: University[];
};

function formatDateEn(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function UniversityTable({partnerships}:{partnerships:Partnership[]}){

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