import React from 'react';
import {
    MainContainer,
    TitleCard,
    DescriptionCard
} from "./styles";

const Card = ({ title, description, priority, color }) => {
  return (
    <MainContainer color={color}>
      <TitleCard>{title}</TitleCard>
      <DescriptionCard>{description}</DescriptionCard>
    </MainContainer>
  )
}

export default Card;
