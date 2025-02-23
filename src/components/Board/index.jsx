import React from 'react';
import {
  Card
} from '..';
import {
    MainContainer,
    TitleBoard
} from "./styles";

const Board = ({ title, color, status, items }) => {
    return (
      <MainContainer>
        <TitleBoard>{title}</TitleBoard>
        {items.map((item) => item.status == status && (
          <Card key={item.id} color={color} id={item.id} priority={"High"} title={item.titulo} description={item.descricao} />
        ))}
      </MainContainer>
    )
}

export default Board;
