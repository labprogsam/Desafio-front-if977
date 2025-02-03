import React from 'react';
import {
  Card
} from '..';
import {
    MainContainer,
    TitleBoard
} from "./styles";

const Board = ({ title, color, status }) => {
    return (
      <MainContainer>
        <TitleBoard>{title}</TitleBoard>
        <Card color={color} id="1" priority={"High"} title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} id="2" priority={"Low"} title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} id="3" title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} id="4" title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
        <Card color={color} id="5" title="Titulo" description="Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons." />
      </MainContainer>
    )
}

export default Board;
