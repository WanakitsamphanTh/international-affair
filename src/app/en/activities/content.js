"use client";
import cooking_1 from "@/images/act_all.JPG";
import cooking_2 from "@/images/act_tako.JPG";
import cooking_3 from "@/images/act_thai.JPG";
import cooking_4 from "@/images/act_pai.JPG";
import game_1 from "@/images/game-1.JPG";
import game_2 from "@/images/game-2.jpg";
import game_3 from "@/images/game-3.JPG";

import Image from "next/image";

export const Content = () => {
    const steps = [
      {
        title: "International Food Party",
        content: (
          <>
            <p className="mb-3 lead">
              A party where international students can come to exchange cultures
              via sharing food. You can experience authentic dishes from
              different countries. It is a great opportunities to make new
              friends. Beside cooking and eating, you can also enjoy games and
              performances.
            </p>
            <div
              className="carousel slide"
              data-ride="carousel"
              id="carouselFoodPartyControls"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src={cooking_1}
                    className="d-block w-100 h-100 img-thumbnail"
                    alt="International Food Party"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={cooking_2}
                    className="d-block w-100 h-100 img-thumbnail"
                    alt="International Food Party"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={cooking_3}
                    className="d-block w-100 h-100 img-thumbnail"
                    alt="International Food Party"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={cooking_4}
                    className="d-block w-100 h-100 img-thumbnail"
                    alt="International Food Party"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselFoodPartyControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselFoodPartyControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </>
        ),
      },
      {
        title: "Japanese culture activities",
        content: (
          <>
            <p className="mb-3 lead">
              Many activities are held to introduce Japanese culture to international students. These activities include tea ceremony, calligraphy, and traditional games. You can experience Japanese culture in a fun and interactive way.
            </p>
            <div
              className="carousel slide"
              data-ride="carousel"
              id="carouselGamesControls"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src={game_3}
                    className="d-block w-100 h-100 img-thumbnail"
                    alt="Japanese culture activities"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={game_2}
                    className="d-block w-100 h-100 img-thumbnail"
                    alt="Japanese culture activities"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={game_1}
                    className="d-block w-100 h-100 img-thumbnail"
                    alt="Japanese culture activities"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselGamesControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselGamesControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </>
        ),
      },
    ];

    return (
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <h3 className="mb-4">{step.title}</h3>
                    </div>
                    <div className="text-muted">{step.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}