"use client";

import { ExternalLink, GraduationCap, BadgeDollarSign, Train, Info } from 'lucide-react';
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

export const Others = () => {
  const benefits = [
    {
      title: "授業料免除",
      content: "協定校の授業料については、学術交流協定に基づき免除となります。ただし、本校の授業料は納めなければなりません。",
      icon: GraduationCap
    },
    {
      title: "後援会支援",
      content: "本校後援会から留学生派遣補助金として本科生2万円、専攻科生10万円を限度として支給します。（他の奨学金等の支給が該当しない場合。1回限り）",
      icon: BadgeDollarSign
    },
    {
      title: "産学連携支援",
      content: "本校産学連携振興会から本校学生への支援事業として，5年生の海外長期インターンシップ派遣学生への渡航費一部援助があります（国内移動分として1人2万円）",
      icon: Train
    }
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">その他の奨学金</h2>
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-12 col-md-4">
              <Card className="h-100 shadow-sm border-0 hover-card">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <div className="mb-3 p-3 rounded-circle bg-primary bg-opacity-10">
                    <benefit.icon size={32} className="text-primary" />
                  </div>
                  <Card.Title className="h5 mb-3">{benefit.title}</Card.Title>
                  <Card.Text>{benefit.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-card {
          transition: transform 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export const Information = () => {
  const supportInfo = {
    title: "留学サポートサイト",
    description: "日本学生支援機構（JASSO）が運営する海外留学を考える方への情報サイト",
    imgSrc: "https://ryugaku.jasso.go.jp/content/000000002.png",
    link: "https://ryugaku.jasso.go.jp/"
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center gap-2">
            留学サポートサイト
          </div>
        </h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <Card className="shadow-sm border-0 hover-card">
              <Card.Body className="text-center">
                <div className="mb-4" style={{ 
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  padding: '1rem'
                }}>
                  <img
                    src={supportInfo.imgSrc}
                    alt="JASSO Support Site"
                    style={{
                      maxHeight: '100%',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/100";
                      e.target.alt = "Placeholder image";
                    }}
                  />
                </div>
                <p className="mb-4">{supportInfo.description}</p>
                <a
                  href={supportInfo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary d-inline-flex align-items-center"
                >
                  詳細を見る
                  <ExternalLink size={16} className="ms-2" />
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card {
          transition: transform 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};