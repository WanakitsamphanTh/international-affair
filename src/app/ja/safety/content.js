"use client";
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { ExternalLink, AlertCircle, FileText, Map, Shield, Mail, CheckCircle } from 'lucide-react';

export const Content = () => {
    const safetyItems = [
      {
        title: "渡航前の必須手続き",
        type: "before",
        items: [
          {
            title: "外務省への届出",
            icon: FileText,
            priority: "high",
            content: {
              description:
                "以下のいずれかへの登録が必要です。現地の最新情報や安否確認のために重要です：",
              actions: [
                {
                  text: "3ヶ月以上の滞在 →「オンライン在留届」に登録",
                  link: "https://www.ezairyu.mofa.go.jp/RRnet/index.html",
                },
                {
                  text: "3ヶ月未満の滞在 →「たびレジ」に登録",
                  link: "https://www.ezairyu.mofa.go.jp/tabireg/index.html",
                },
              ],
            },
          },
          {
            title: "海外旅行保険への加入",
            icon: Shield,
            priority: "high",
            content: {
              description: "以下が必要です：",
              steps: [
                "留学期間中の医療費等を補償する海外旅行保険への加入（必須）",
                "長期滞在の場合、在留許可（residence permit）申請用の海外保険が必要",
              ],
            },
          },
        ],
      },
      {
        title: "留学中の義務",
        type: "during",
        items: [
          {
            title: "定期報告",
            icon: Mail,
            content: {
              description: "月1回のメール報告が必要です：",
              requirements: [
                "派遣担当部門へメールで報告",
                "派遣先・本校の指導教員のコメントを含む",
                "定期的な報告で安全確認",
              ],
            },
          },
          {
            title: "旅行計画の提出",
            icon: Map,
            content: {
              description: "長期休暇中の旅行には以下が必要です：",
              requirements: [
                "各滞在先での連絡先を明記",
                "保護者の同意を得ること",
                "事前に旅行計画を提出",
              ],
            },
          },
        ],
      },
      {
        title: "緊急時の対応",
        type: "emergency",
        items: [
          {
            title: "緊急時の手順",
            icon: AlertCircle,
            priority: "critical",
            content: {
              steps: [
                {
                  title: "安否確認",
                  description:
                    "事件事故発生時、メールで安否確認を行います。大学からの連絡を待たず、自主的な報告をお願いします。",
                },
                {
                  title: "支援体制",
                  description:
                    "派遣先の国際交流室および担当者と連携して対応。必要に応じて本校教員を現地派遣します。",
                },
                {
                  title: "早期帰国",
                  description:
                    "不適切な状況が発生した場合、早期帰国の措置を取り、専攻長の指示のもと適切な指導を行います。",
                },
              ],
            },
          },
        ],
      },
    ];
    
      return (
        <section>
          <div className="container py-5">
            <h2 className="h3 mb-4">
              <div className="d-flex align-items-center justify-content-center gap-2">
                留学の安全対策ガイド
              </div>
            </h2>
    
            {safetyItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-5">
                <h3 className="h4 mb-4 d-flex align-items-center gap-2">
                  {section.type === "emergency" ? (
                    <AlertCircle size={24} className="text-danger" />
                  ) : (
                    <CheckCircle size={24} className="text-primary" />
                  )}
                  {section.title}
                </h3>
    
                <div className="row g-4">
                  {section.items.map((item, index) => (
                    <div key={index} className="col-12">
                      <Card className={`border-0 shadow-sm ${section.type === 'emergency' ? 'border-danger border-start border-4' : ''}`}>
                        <Card.Body>
                          <div className="d-flex align-items-start gap-3">
                            <div className={`p-3 rounded-circle ${
                              section.type === 'emergency' 
                                ? 'bg-danger bg-opacity-10' 
                                : 'bg-primary bg-opacity-10'
                            }`}>
                              <item.icon 
                                size={24} 
                                className={section.type === 'emergency' ? 'text-danger' : 'text-primary'} 
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h4 className="h5 mb-3">{item.title}</h4>
                              
                              {item.content.description && (
                                <p className="mb-3">{item.content.description}</p>
                              )}
    
                              {item.content.actions && (
                                <div className="d-flex flex-column gap-2 mb-3">
                                  {item.content.actions.map((action, actionIndex) => (
                                    <Link
                                      key={actionIndex}
                                      href={action.link}
                                      className="btn btn-outline-primary d-inline-flex align-items-center"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {action.text}
                                      <ExternalLink size={16} className="ms-2" />
                                    </Link>
                                  ))}
                                </div>
                              )}
    
                              {item.content.steps && (
                                <ul className="list-unstyled mb-0">
                                  {item.content.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="mb-2 d-flex align-items-start gap-2">
                                      <CheckCircle size={16} className="text-success mt-1" />
                                      <span>{typeof step === 'string' ? step : step.description}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
    
                              {item.content.requirements && (
                                <ul className="list-unstyled mb-0">
                                  {item.content.requirements.map((req, reqIndex) => (
                                    <li key={reqIndex} className="mb-2 d-flex align-items-start gap-2">
                                      <CheckCircle size={16} className="text-success mt-1" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
    
          <style jsx>{`
            :global(.card) {
              transition: transform 0.2s ease-in-out;
            }
            :global(.card:hover) {
              transform: translateY(-5px);
            }
          `}</style>
        </section>
      );
    }