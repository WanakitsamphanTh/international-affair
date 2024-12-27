import Link from 'next/link';

function Hero() {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Visa Application & Residence Permit</h1>
              <p className="lead mb-4">
                Applying for a visa and residence permit can be a daunting task. Here are some guidelines to help you through the process.
              </p>
              <div className="row g-4 py-3">
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

function Content(){
    return (
      <section>
        <h1>Check your period of stay</h1>
        <p>Please consult your contact person in Sendai KOSEN and check your period of stay.
            Student visa are required for students staying over 3 months. Otherwise you will need Short-Term Stay visa.</p>
        <p>Check <Link href = "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">here</Link> for visa exemption countries/regions for Short-Term Stay</p>
        <h1>Prepare your document</h1>
        <p>Certificate of Eligibility (CoE) is one of the document that is required for visa application.</p>
        <ul>
            <li>CoE Application form click <Link href="">here</Link> to download</li>
            <li>Face photo 4x3 in PDF format</li>
            <li>Copy of passport</li>
        </ul>
        <h1>Apply for Visa at Embassy of Japan </h1>
        <p></p>
        <h1>Submit your document at immigration</h1>
        <p>Please submit your visa at the immigration when you arrive. You also need to pre-register <Link href="">Visit Japan Web</Link> for immigration and custom procedures</p>
      </section>
    );
}
  

export default function Residence(){
    return (
        <>
        <Hero />
        <Content/>
        </>
    )
}