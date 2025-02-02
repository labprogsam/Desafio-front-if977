import React from 'react';
import {
    MainContainer,
    TitleCard,
    DescriptionCard,
    TagCard
} from "./styles";

const Card = ({ title, description, priority, color }) => {
  return (
    <MainContainer color={color}>
      <TitleCard>{title}</TitleCard>
      <DescriptionCard>{description}</DescriptionCard>
      <TagCard>{priority}</TagCard>
    </MainContainer>
  )
}

export default Card;
