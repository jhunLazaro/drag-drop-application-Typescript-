import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text?: string; // text?: string -> ? mark is for optional prop w/out ? is required
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add Another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
