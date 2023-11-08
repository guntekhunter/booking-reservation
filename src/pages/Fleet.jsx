import React from "react";
import ContentProfider from "../component/ContentProfider";
import Title from "../component/Title";
import Main from "../component/Main";
import Card from "../component/Card";
import "../css/fleet.css";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

export default function Fleet() {
  const navigate = useNavigate();

  const order = () => {
    navigate("/order");
  };
  return (
    <div>
      <ContentProfider>
        <Title title="Fleet" />
        <Main>
          <Card>
            <div className="flex justify-between between">
              <Card className="fleet">Ahhay</Card>
              <Card className="fleet">Ahhay</Card>
              <Card className="fleet">Ahhay</Card>
            </div>
          </Card>

          <Title title="Taxi" className="mt-1" />
          <Card>Ommaleka</Card>
          <Button title="Order Now" className="mt-1" onClick={order} />
        </Main>
      </ContentProfider>
    </div>
  );
}
