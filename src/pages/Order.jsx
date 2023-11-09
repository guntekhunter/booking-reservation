import React, { useEffect, useState } from "react";
import ContentProfider from "../component/ContentProfider";
import Title from "../component/Title";
import Main from "../component/Main";
import Card from "../component/Card";
import "../css/order.css";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const [fleet, setFleet] = useState("");
  const [adress, setAdress] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setAdress(localStorage.getItem("adress"));
    setDestination(localStorage.getItem("destination"));
    setFleet(localStorage.getItem("fleet"));
  }, []);

  const checkout = () => {
    navigate("/wait");
  };
  return (
    <div>
      <ContentProfider>
        <Title title="Order" />
        <Main>
          <Card>
            <div className="order-card">
              <table className="">
                <tr>
                  <td>Fleet</td>
                  <td>:</td>
                  <td>{fleet}</td>
                </tr>
                <tr>
                  <td>Adress</td>
                  <td>:</td>
                  <td>{adress}</td>
                </tr>
                <tr>
                  <td>Destination</td>
                  <td>:</td>
                  <td>{destination}</td>
                </tr>
              </table>
              <Button title="Checkout" onClick={checkout} />
            </div>
          </Card>
        </Main>
      </ContentProfider>
    </div>
  );
}
