import React, { useState } from "react";
import ContentProfider from "../component/ContentProfider";
import Title from "../component/Title";
import Main from "../component/Main";
import Card from "../component/Card";
import Button from "../component/Button";
import FinishModal from "../component/FinishModal";
import { useNavigate } from "react-router-dom";

export default function Wait() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const finish = () => {
    setIsActive(true);
    setTimeout(function () {
      navigate("/promo");
    }, 3000);
  };
  return (
    <div>
      {isActive && <FinishModal />}
      <ContentProfider>
        <Title title="Wait For The Fleet" />
        <Main>
          <Card>
            <div className="text-center">
              <p>Wait For Your Fleet To Arrive</p>
              <p className="fleet-info">
                Please Click the button if the fleet is arrive
              </p>
              <Button
                title="Fleet Is Arrive"
                className="full mt-1"
                onClick={finish}
              />
            </div>
          </Card>
        </Main>
      </ContentProfider>
    </div>
  );
}
