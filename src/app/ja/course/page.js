import Image from "next/image";
import relationship from "@/images/relationship.png";
import { University } from "lucide-react";
function Hero() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">海外への留学</h1>
            <p className="lead mb-4">
              学問の卓越性と文化交流を通じて、大陸を越えた架け橋を築きます。
              <br/>私たちの世界中に広がる協定校ネットワークをご覧ください。
            </p>
            <div className="row g-4 py-3">
              <div className="col-md-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-globe fs-4 text-primary me-2"></i>
                  <span>9か国</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-building fs-4 text-primary me-2"></i>
                  <span>20個の大学または学校</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorldwideNetwork() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">協定締結校</h2>
        <div className="position-relative">
          <Image
            src={relationship}
            alt="Global partnership network"
            width={1521}
            height={947}
            className="img-fluid rounded shadow"
            priority
          />
        </div>
      </div>
    </section>
  );
}


function ProgramList() {
  const programs = [
    {
      icon: "bi-calendar-check",
      name: "長期インターンシップ",
      desc: "協定締結校への3～5か月間最大１年間のインターンシップ（本科５年次、専攻科）、トビタテ！留学奨学金（学年不問）を利用した１か月～１年の留学、等に申請できます。",
    },
    {
      icon: "bi-calendar2-week",
      name: "短期インターンシップ",
      desc: "タイKMITL（約1ヶ月~2か月間）、フィンランドMUASサマースクール（８月）、モンゴル高専（約1ヶ月~2か月間）等があります。",
    },
    {
      icon: "bi-airplane-fill",
      name: "研修旅行",
      desc: "タイKMITL等へ１週間の研修旅行（本科４年次）があります。",
    },
    {
      icon: "bi-people-fill",
      name: "国際ワークショップ参加",
      desc: "日タイ高校生ICTフェア(TJ-SIFやTJ-SSF)等に参加しポスター発表を行います。",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">留学プログラム</h2>
        <div className="row g-4">
          {programs.map((program, index) => (
            <div key={index} className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition-all">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <i className={`bi ${program.icon} fs-4 text-primary`}></i>
                    </div>
                    <h3 className="h4 mb-0 fw-bold">{program.name}</h3>
                  </div>
                  <p className="card-text text-muted mb-0">{program.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UniversityTable() {
    const partnerships = [
      {
        country: "韓国",
        institutions: [
          {
            name: "仁荷工業専門大学",
            url: "https://www.inha.ac.kr/eng/index..do",
            agreements: "2009年10月1日"
          },
          {
            name: "青雲大学校",
            url: "https://home.chungwoon.ac.kr/english/index.do",
            agreements: "2009年10月1日"
          }
        ]
      },
      {
        country: "タイ",
        institutions: [
          {
            name: "キングモンクット工科大学ラカバン校（KMITL）",
            url: "https://www.kmitl.ac.th/",
            agreements: "2009年10月1日"
          },
          {
            name: "タイ高専　KOSEN-KMITL",
            url: "http://www.kosen.kmitl.ac.th/en",
            agreements: "2021年3月25日"
          },
          {
            name: "プリンセスチュラポーンサイエンスハイスクール サトゥーン校",
            url: "http://www.pccst.ac.th/",
            agreements: "2021年6月4日"
          },
          {
            name: "プリンセスチュラポーンサイエンスハイスクール ロッブリー校",
            url: "http://www.pccpl.ac.th/",
            agreements: "2021年6月4日"
          }
        ]
      },
      {
        country: "台湾",
        institutions: [
          {
            name: "淡江大学",
            url: "https://english.tku.edu.tw/",
            agreements: "2021年1月5日"
          }
        ]
      },
      {
        country: "モンゴル",
        institutions: [
          {
            name: "モンゴル高等専門学校連盟（第1ブロック高専包括協定）",
            url: "https://www.kosen-k.go.jp/en/global/mongolia",
            agreements: "2017年10月23日"
          }
        ]
      },
      {
        country: "カザフスタン",
        institutions: [
          {
            name: "アルマティ電気通信大学",
            url: "https://aues.edu.kz/en",
            agreements: "2018年2月6日"
          }
        ]
      },
      {
        country: "マレーシア",
        institutions: [
          {
            name: "マレーシア・トレンガヌ大学",
            url: "https://www.umt.edu.my/",
            agreements: "2019年2月7日"
          }
        ]
      },
      {
        country: "ドイツ",
        institutions: [
          {
            name: "フェリックス・フェッヒェンバッハ・ベルーフスコレーク",
            url: "https://www.ffb-lippe.de/",
            agreements: "2009年10月1日"
          }
        ]
      },
      {
        country: "フィンランド",
        institutions: [
          {
            name: "メトロポリア応用科学大学（東北地区高専包括協定）",
            url: "https://www.metropolia.fi/en",
            agreements: "2009年10月1日"
          },
          {
            name: "トゥルク応用科学大学（東北地区高専包括協定）",
            url: "https://www.turkuamk.fi/en/",
            agreements: "2009年10月1日"
          },
          {
            name: "オウル応用科学大学",
            url: "https://oamk.fi/en/",
            agreements: "2015年3月24日"
          }
        ]
      },
      {
        country: "フランス",
        institutions: [
          {
            name: "リールA技術短期大学 （東北地区等高専包括協定）",
            url: "https://iut.univ-lille.fr/",
            agreements: "2009年10月1日"
          },
          {
            name: "アルトワ大学（東北地区等高専包括協定）",
            url: "https://www.univ-artois.fr/",
            agreements: "2012年6月24日"
          },
          {
            name: "ブロワ技術短期大学（東北地区等高専包括協定）",
            url: "https://iut-blois.univ-tours.fr/",
            agreements: "2016年1月13日"
          },
          {
            name: "ルアーヴル技術短期大学（東北地区等高専包括協定）",
            url: "https://www.univ-lehavre.fr/",
            agreements: "2016年3月1日"
          },
          {
            name: "リトラル・コート・ドパール技術短期大学（東北地区等高専包括協定）",
            url: "http://www.iut.univ-littoral.fr/",
            agreements: "2016年5月31日"
          },
          {
            name: "ヴァランシエンヌ技術短期大学（東北地区等高専包括協定）",
            url: "https://www.uphf.fr/iut",
            agreements: "2017年7月20日"
          }
        ]
      }
    ];
  
    return (
      <section className="py-5">
        <div className="container">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th style={{width: "20%"}}>相手国</th>
                <th style={{width: "50%"}}>大学等名</th>
                <th style={{width: "30%"}}>協定締結校年月日</th>
              </tr>
            </thead>
            <tbody>
              {partnerships.map((country, countryIndex) => (
                country.institutions.map((institution, instIndex) => (
                  <tr key={`${countryIndex}-${instIndex}`}>
                    {instIndex === 0 && (
                      <td rowSpan={country.institutions.length}>
                        {country.country}
                      </td>
                    )}
                    <td>
                      <a 
                        href={institution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none link-primary"
                      >
                        {institution.name}
                        <i className="bi bi-box-arrow-up-right ms-1" style={{fontSize: "0.8em"}}></i>
                      </a>
                    </td>
                    <td>{institution.agreements}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

export default function Courses(){
    return (
        <>
        <Hero />
        <ProgramList />
        <WorldwideNetwork />
        <UniversityTable />
        </>
    );
}