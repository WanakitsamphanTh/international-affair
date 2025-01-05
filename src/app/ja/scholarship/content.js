"use client";

import { ExternalLink } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardExample = () => {
  const cardData = [
    {
      title: "トビタテ！留学JAPAN　新・日本代表プログラム",
      content: "官民協働で2014年から実施している海外留学支援制度。返済不要の奨学金や事前事後研修等の支援で、意欲ある学生の海外チャレンジを応援します。",
      imgLink: "https://tobitate-mext.jasso.go.jp/assets/images/logo-sp.png",
      link: "https://tobitate-mext.jasso.go.jp/",
    },
    {
      title: "JASSO（日本学生支援機構）",
      content: "国毎に担当する高専で日本学生支援機構協定派遣の奨学金が採択されている場合には、学業成績等の条件を満たすことで採択人数枠の範囲内で、フィンランドとフランスへの留学には月80,000円、タイへの留学には月70,000円の奨学金が支給されます。",
      imgLink: "https://www.jasso.go.jp/assets/images/common/logo.png",
      link: "https://www.jasso.go.jp/ryugaku/scholarship_a/haken/index.html",
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">奨学金リスト</h2>
      <style jsx>{`
        .study-abroad-card {
          transition: transform 0.2s ease-in-out;
          height: 500px; /* Fixed height for all cards */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .study-abroad-card:hover {
          transform: translateY(-5px);
        }

        .card-img-container {
          position: relative;
          height: 100px; /* Fixed height for the image section */
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .external-link-icon {
          margin-left: 0.5rem;
        }

        .card-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .row.g-4 > div {
          display: flex; /* Flex container for equal height columns */
        }
      `}</style>

      <div className="row g-4">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 col-md-6 d-flex">
            <Card className="study-abroad-card shadow">
              <div className="card-img-container">
                <Card.Img
                  variant="top"
                  src={card.imgLink}
                  alt={`${card.title} logo`}
                  onError={(e) => {
                    const target = e.target;
                    target.src = "/api/placeholder/400/200";
                    target.alt = "Placeholder image";
                  }}
                  style={{
                    objectFit: "contain",
                    maxHeight: "100%",
                    width: "auto",
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h5 mb-3">{card.title}</Card.Title>
                <Card.Text className="flex-grow-1">{card.content}</Card.Text>
                <Button
                  variant="primary"
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button mt-3"
                >
                  詳細を見る
                  <ExternalLink size={16} className="external-link-icon" />
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Information = () => {
    return (
      <section>
        <div className="container py-5">
          <h2 className="text-center mb-5">留学サポートサイト</h2>
        </div>
      </section>
    );
};