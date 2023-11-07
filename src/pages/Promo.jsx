import React from "react";
import Title from "../component/Title";
import ContentProfider from "../component/ContentProfider";
import PromoImage from "../assets/promo.jpg";
import Main from "../component/Main";
import Card from "../component/Card";
import "../css/promo.css";

export default function Promo() {
  return (
    <div>
      <ContentProfider>
        <Title title="Promo" />
        <Main>
          <div className="flex justify-between between">
            <Card className="filter">Ommaleka</Card>
            <Card className="filter">Ommaleka</Card>
            <Card className="filter">Ommaleka</Card>
          </div>
          <div className="between-down">
            <Card className="between">
              <div className="card-promo">
                <div>
                  <img src={PromoImage} alt="" />
                  <p className="title">Banyak Promo Lainnnya</p>
                  <div className="container-date">
                    <p className="date">20 Nov 2023</p>
                    <button href="" className="see-more">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Main>
      </ContentProfider>
    </div>
  );
}
