import React from "react";
import ContentProfider from "../component/ContentProfider";
import Title from "../component/Title";
import Main from "../component/Main";
import Card from "../component/Card";
import InputField from "../component/InputField";
import "../css/adress.css";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Loader } from "@googlemaps/js-api-loader";

export default function Adress() {
  const [adress, setAdress] = useState();
  const [destination, setDestination] = useState();
  const navigate = useNavigate();
  const selectFleet = () => {
    localStorage.setItem("adress", adress);
    localStorage.setItem("destination", destination);
    navigate("/order");
  };

  console.log(Loader);

  return (
    <div>
      <ContentProfider>
        <Title title="Adress & Destination" />
        <Main>
          <Card className="card-adress">
            <div>
              <InputField
                title="Adress"
                type="general"
                className="between"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
              <InputField
                title="Destination"
                type="general"
                className="between"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <Button title="Send" onClick={selectFleet} />
            </div>
          </Card>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9343854876556!2d119.42599948404211!3d-5.11427769306157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd26b0918735%3A0xa010d7db0ba8cbe0!2sKelompok%20Bermain%20Anggrek!5e0!3m2!1sid!2sid!4v1699492893334!5m2!1sid!2sid"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Main>
      </ContentProfider>
    </div>
  );
}
