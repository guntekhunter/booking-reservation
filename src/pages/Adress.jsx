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

export default function Adress() {
  const [adress, setAdress] = useState();
  const [destination, setDestination] = useState();
  const navigate = useNavigate();
  const selectFleet = () => {
    localStorage.setItem("adress", adress);
    localStorage.setItem("destination", destination);
    navigate("/order");
  };
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
        </Main>
      </ContentProfider>
    </div>
  );
}
