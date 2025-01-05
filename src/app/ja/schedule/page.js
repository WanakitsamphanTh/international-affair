import React from 'react';
import { Search, Languages, FileCheck, School, Plane, FileText, Users } from 'lucide-react';
import { siteMeta } from "@/lib/ja/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/ja/baseMetadata";
const {siteTitle, siteUrl, siteIcon} = siteMeta;

function Hero() {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">
                留学するまでのスケジュール
              </h1>
              <p className="lead mb-4">
                このスケジュールは、海外長期インターンシップを希望する学生が留学するのを決定するまでの流れを示しています。他の留学プログラムはこのスケジュールとは異なる場合があります。
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

function Timeline() {
  const steps = [
    {
      id: 1,
      title: "情報を集める",
      subtitle: "1年～1年半前",
      description: "留学先、奨学金の情報収集",
      icon: Search
    },
    {
      id: 2,
      title: "語学試験を受験する",
      description: "申請に必要なスコアをクリア",
      icon: Languages
    },
    {
      id: 3,
      title: "派遣先へ申請",
      description: "担当教員・コーディネーター・エージェントとやり取りして、行先を決定",
      icon: FileCheck
    },
    {
      id: 4,
      title: "奨学金申請",
      subtitle: "半年～1年前",
      description: "トビタテ！留学奨学金申請は、2月",
      icon: School
    },
    {
      id: 5,
      title: "入学許可書を受け取る",
      description: "早めに宿舎の申し込みを行う",
      icon: FileText
    },
    {
      id: 6,
      title: "ビザ申請と渡航準備",
      subtitle: "2～3か月前",
      description: "パスポートとビザの申請を行う。入国の条件等、最新の情報を確認。航空券を購入する。",
      icon: Plane
    },
    {
      id: 7,
      title: "事前説明会",
      description: "保護者との個別面談は随時、希望に応じて行う。7月初めに本人・保護者に対し、国際交流委員会の教員が中心に説明会を行う。",
      icon: Users
    }
  ];

  return (
    <div className="container py-5">
      
      <div className="position-relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="row mb-4 g-0">
              <div className="col-auto">
                <div className="position-relative">
                  <div className="position-absolute h-100 start-50 translate-middle-x" 
                       style={{width: '2px', backgroundColor: '#e9ecef', top: '24px'}}>
                  </div>
                  <div className="rounded-circle bg-primary p-3 position-relative">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="col ps-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <h3 className="h5 fw-bold mb-0">
                        {step.id}. {step.title}
                      </h3>
                      {step.subtitle && (
                        <span className="badge bg-primary bg-opacity-10 text-primary ms-2">
                          {step.subtitle}
                        </span>
                      )}
                    </div>
                    <p className="text-muted mb-0">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function StudyAbroadSchedule() {
  return (
    <main>
      <Hero />
      <Timeline />
    </main>
  );
}

// metadata
const pageTitle = "留学するまでのスケジュール";
const pageDesc = "海外長期インターンシップを希望する学生が留学するのを決定するまでの流れ";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/ja/schedule", siteUrl).toString();

export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    url: ogpUrl,
    description: pageDesc,
  },

  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  }
}