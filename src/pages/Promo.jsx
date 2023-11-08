import React, { useEffect, useState } from "react";
import Title from "../component/Title";
import ContentProfider from "../component/ContentProfider";
import PromoImage from "../assets/promo.jpg";
import Main from "../component/Main";
import Button from "../component/Button";
import "../css/promo.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Promo() {
  const navigate = useNavigate();
  const [promoData, setPromoData] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await axios.get("http://localhost:3333/promo");
        console.log(response);
        setPromoData(response.data);
      } catch (error) {
        console.error("Axios request failed:", error);
      }
    };
    fetchPromos();
  }, []);
  const seeMore = () => {
    navigate("/fleet");
  };

  const handleFilter = async (type) => {
    try {
      const response = await axios.get("http://localhost:3333/promo");
      const responseData = response.data;

      if (type === "all") {
        setPromoData(response.data);
      } else {
        const filteredData = responseData.filter((item) => item.type === type);
        setPromoData(filteredData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ContentProfider>
        <Title title="Promo" />
        <Main>
          <div className="flex space-x">
            <Button
              className="filter"
              title="Platinum"
              onClick={() => handleFilter("platinum")}
            />
            <Button
              className="filter"
              title="Silver"
              onClick={() => handleFilter("silver")}
            />
            <Button
              className="filter"
              title="Golden"
              onClick={() => handleFilter("golden")}
            />
            <Button
              className="filter"
              title="All"
              onClick={() => handleFilter("all")}
            />
          </div>
          <div className="between-down mt-1">
            {/* card */}
            {promoData.map((item, key) => (
              <div className="between card-promo" key={key}>
                <div className="container-content">
                  <img src={item.image} alt="" />
                  <div className="content">
                    <p className="title">{item.title}</p>
                    <div className="container-date">
                      <p className="date">{item.date}</p>
                      <button href="" className="see-more" onClick={seeMore}>
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Main>
      </ContentProfider>
    </div>
  );
}
