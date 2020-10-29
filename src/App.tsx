import React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="TO DO">
        <Card text="Generate App test"></Card>
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="DONE">
        <Card text="Begin to use Static typing"></Card>
      </Column>
      <AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
