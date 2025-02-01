import React from 'react';
import {
  Card
} from '..';
import {
    MainContainer,
    TitleBoard
} from "./styles";

const Board = ({ title, color }) => {
    return (
      <MainContainer>
        <TitleBoard>{title}</TitleBoard>
        <Card color={color} title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
      </MainContainer>
    )
}

export default Board;
