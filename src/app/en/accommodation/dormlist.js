"use client";
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import dorm from "@/images/dorm.png";
import Image from "next/image";
import { FileText } from "lucide-react";

export const SchoolDormitories = () => {
    const dormitories = [
      {
        name: "Shuka-Ryo",
        campus: "Natori Campus",
        href: "https://www.sendai-nct.ac.jp/wp/wp-content/uploads/2023/04/20230405-Dormitory-Guidance-Natori.pdf"
      },
      {
        name: "Shoin-Ryo",
        campus: "Hirose Campus",
        href: "https://www.sendai-nct.ac.jp/wp/wp-content/uploads/2023/05/100-Guidance2023_dormitory-guide_v2.pdf"
      }
    ];
  
    return (
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mb-5">
                <p className="lead text-muted" style={{ textAlign: "justify" }}>
                  Dormitories are provided to campuses for students coming from
                  remote places. The dormitories are operated voluntarily under
                  the guidance of Ryoseikai, composed of dormitory students. The
                  dormitory is an educational facility to help cultivate
                  well-rounded character through disciplined dormitory life in
                  addition to providing learning conveniences. Students develop
                  their own character through friendly competition. The dormitory
                  offers good opportunities for students to cultivate adaptability
                  to social life.
                </p>
              </div>
  
              <div className="mb-5">
                <p className="lead text-muted" style={{ textAlign: "justify" }}>
                  Each domitory is conveniently located near classrooms, and
                  libraries. All dormitories are furnished, and meals are
                  provided. There are fully-equipped communal kitchens with
                  cooking utensils and cutlery provided, where students can
                  prepare their own meals in the dormitories if they prefer. We
                  will lend international students items such as beddings.
                  Dormitories are closed during part of the school vacation
                  period.
                </p>
              </div>
  
              <div className="row g-4 mb-5">
                {dormitories.map((dorm, index) => (
                  <div className="col-md-6" key={index}>
                    <Link 
                      href={dorm.href}
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="h-100 text-center shadow-sm border-0">
                        <Card.Body>
                          <FileText className="text-primary mb-3 text-black" size={32} />
                          <Card.Title className="h4 mb-2">{dorm.name}</Card.Title>
                          <Card.Subtitle className="text-muted mb-3">{dorm.campus}</Card.Subtitle>
                          <small className="text-primary d-block">
                            View Dormitory Guide (PDF)
                          </small>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
  
              <div className="text-center">
                <Image
                  src={dorm}
                  alt="Dormitory"
                  width={1128}
                  height={1152}
                  className="img-fluid rounded"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };