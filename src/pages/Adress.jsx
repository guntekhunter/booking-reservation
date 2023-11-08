import React from "react";
import ContentProfider from "../component/ContentProfider";
import Title from "../component/Title";
import Main from "../component/Main";
import Card from "../component/Card";
import InputField from "../component/InputField";
import "../css/adress.css";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

export default function Adress() {
  const navigate = useNavigate();
  const selectFleet = () => {
    navigate("/fleet");
  };
  return (
    <div>
      <ContentProfider>
        <Title title="Adress & Destination" />
        <Main>
          <Card className="card-adress">
            <div>
              <InputField title="Adress" type="general" className="between" />
              <InputField title="Adress" type="general" className="between" />
              <Button title="Send" onClick={selectFleet} />
            </div>
          </Card>
        </Main>
      </ContentProfider>
    </div>
  );
}
