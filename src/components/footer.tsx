import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer(){
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/sendaikosen",
      icon: "#twitter",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sendai_kosen/",
      icon: "#instagram",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/International.NITSC/",
      icon: "#facebook",
    },
  ];

  return (
    <div className="container">
      {/* svg icons */}
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="facebook" viewBox="0 0 24 24">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </symbol>
        <symbol id="instagram" viewBox="0 0 24 24">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </symbol>
        <symbol id="twitter" viewBox="0 0 24 24">
          <path d="M12.6 1.5h2.2l-4.8 5.5 5.7 7.5h-4.4l-3.5-4.5-3.9 4.5H1.7l5.2-5.9L1 1.5h4.5l3.1 4.2 4-4.2zm-0.8 11.7h1.2L4.7 2.75H3.4z" />
        </symbol>
        <symbol id="email" viewBox="0 0 24 24">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </symbol>
        <symbol id="phone" viewBox="0 0 24 24">
          <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
        </symbol>
      </svg>

      <footer className="row py-3 my-4 border-top">
        <div className="col-12 col-md-6 d-flex flex-column mb-3 mb-md-0">
          <span className="mb-2 text-body-secondary">
            &copy; {currentYear} National Institute of Technology, Sendai College
          </span>

          <div className="d-flex flex-column text-body-secondary">
            <Link
              href="mailto:renkei@sendai-nct.ac.jp"
              className="text-decoration-none text-body-secondary mb-1 d-flex align-items-center"
            >
              <svg className="bi me-2 align-middle" width="24" height="24">
                <use xlinkHref="#email" />
              </svg>
              renkei@sendai-nct.ac.jp
            </Link>

            <Link
              href="tel:+81-22-391-5511"
              className="text-decoration-none text-body-secondary d-flex align-items-center"
            >
              <svg className="bi me-2 align-middle" width="24" height="24">
                <use xlinkHref="#phone" />
              </svg>
              +81-22-391-5511
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start">
          <ul className="nav list-unstyled d-flex">
            {socialLinks.map(({ href, icon }, index) => (
              <li key={index} className="me-3">
                <Link className="text-body-secondary" href={href}>
                  <svg className="bi align-middle" width="24" height="24">
                    <use xlinkHref={icon} />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}