import React from "react";
import ContentProfider from "../component/ContentProfider";
import Title from "../component/Title";
import Main from "../component/Main";
import Card from "../component/Card";
import "../css/order.css";
import Button from "../component/Button";

export default function Order() {
  return (
    <div>
      <ContentProfider>
        <Title title="Order" />
        <Main>
          <Card>
            <div className="order-card">
              <table className="">
                <tr>
                  <td>Agung</td>
                  <td>:</td>
                  <td>Agung</td>
                </tr>
                <tr>
                  <td>Agung</td>
                  <td>:</td>
                  <td>Agung</td>
                </tr>
                <tr>
                  <td>Agung</td>
                  <td>:</td>
                  <td>Agung</td>
                </tr>
              </table>
              <Button title="Checkout" />
            </div>
          </Card>
        </Main>
      </ContentProfider>
    </div>
  );
}
