import React from "react";
import ContentProfider from "../component/ContentProfider";
import Title from "../component/Title";
import Main from "../component/Main";
import Card from "../component/Card";
import "../css/fleet.css";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Fleet() {
  const [type, setType] = useState();
  const [fleet, setFleet] = useState();
  const navigate = useNavigate();

  const order = (id) => {
    localStorage.setItem("id-fleet", id);
    navigate("/adress");
  };

  const handleFilter = async (type) => {
    try {
      setType(type);
      const response = await axios.get("http://localhost:3333/fleet");
      const responseData = response.data;

      if (type === "all") {
        setFleet(response.data);
      } else {
        const filteredData = responseData.filter(
          (item) => item.vehicle_type === type
        );
        setFleet(filteredData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const capitalizeFirstLetter = (str) => {
    if (str && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    // If the input is undefined or empty, return an empty string or handle it accordingly
    return "";
  };

  console.log(fleet);
  return (
    <div>
      <ContentProfider>
        <Title title="Fleet" />
        <Main>
          <Card>
            <div className="flex justify-between between space-x">
              <Button
                className="fleet"
                title="Taxi"
                onClick={() => handleFilter("taxi")}
              >
                Taxi
              </Button>
              <Button
                className="fleet"
                title="Bus"
                onClick={() => handleFilter("bus")}
              >
                Bus
              </Button>
              <Button
                className="fleet"
                title="Shuttle"
                onClick={() => handleFilter("shuttle")}
              >
                Shuttle
              </Button>
            </div>
          </Card>

          <Title title={capitalizeFirstLetter(type)} className="mt-1" />
          <div className="grid">
            {fleet?.map((item, key) => (
              <Card className="grid-item fleet-card" key={key}>
                {item.name}
                <Button
                  title="Order Now"
                  className="mt-1"
                  onClick={() => order(item.id)}
                />
              </Card>
            ))}
          </div>
        </Main>
      </ContentProfider>
    </div>
  );
}
