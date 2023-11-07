import React from "react";
import Title from "../component/Title";
import ContentProfider from "../component/ContentProfider";
import Main from "../component/Main";
import Card from "../component/Card";

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
            <Card className="between">Ini</Card>
            <Card className="between">Ini</Card>
            <Card className="between">Ini</Card>
          </div>
        </Main>
      </ContentProfider>
    </div>
  );
}
