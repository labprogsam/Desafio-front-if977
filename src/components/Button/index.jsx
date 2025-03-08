import React, { useState } from 'react';
import {
  MainContainer
} from './styles';

const Button = ({ title, onClick, color, background }) => {
  return (
    <MainContainer color={color} background={background} onClick={() => onClick()}>
      {title}
    </MainContainer>
  )
}

export default Button;
