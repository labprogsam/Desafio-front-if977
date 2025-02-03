import React from 'react';
import { Link } from 'react-router-dom';
import {
    MainContainer,
    TitleCard,
    DescriptionCard,
    TagCard
} from "./styles";

const Card = ({ title, description, priority, color, id }) => {
  return (
    <Link to={`/task/${id}`}>
      <MainContainer color={color}>
        <TitleCard>{title}</TitleCard>
        <DescriptionCard>{description}</DescriptionCard>
        <TagCard>{priority}</TagCard>
      </MainContainer>
    </Link>
  )
}

export default Card;
