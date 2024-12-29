import React from "react";
import Image from "next/image";
import homeimg from "@/images/home.png";

function Hero() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            src={homeimg}
            alt="仙台高専 メインイメージ"
            className="d-block mx-lg-auto img-fluid rounded shadow-lg"
            width={1400}
            height={1000}
            priority
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-4">
            国際交流委員会
          </h1>
          <p className="lead mb-4" style={{ textAlign: "justify" }}>
            私たちは、留学生のサポート、異文化交流イベントの開催、海外研修の支援など、さまざまな活動を行っています。
            <br />
            これらの活動を通じて、学生たちが国際的な視野を広げるお手伝いをしています。
          </p>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row g-4 py-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">9</div>
            <div className="h5">提携国数</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">20+</div>
            <div className="h5">提携機関数</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">80</div>
            <div className="h5">2021年以降の留学生受入数</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">15</div>
            <div className="h5">派遣学生数（2023年度）</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestNews() {
  const news = [
    {
      date: "2024年12月20日",
      title: "春季交換留学プログラムの募集開始",
      description: "2025年春季交換留学プログラムの応募受付を開始しました。締切：2025年1月31日"
    },
    {
      date: "2024年12月15日",
      title: "国際文化祭が成功裏に終了",
      description: "年次国際文化祭に200名以上の学生が参加し、世界各国の伝統文化を紹介しました。"
    },
    {
      date: "2024年12月10日",
      title: "新規提携校の発表",
      description: "仙台高専がヨーロッパの主要工科大学と新たな提携を結びました。"
    }
  ];

  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">最新ニュース</h2>
        <div className="row g-4">
          {news.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="text-muted mb-2">{item.date}</div>
                  <h5 className="card-title mb-3">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="text-decoration-none">詳細を見る →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <LatestNews />
    </main>
  );
}