import React, { useState } from 'react';
import {
  MainContainer
} from './styles';

const Button = ({ title }) => {
  const [active, setActive] = useState(false);
  return (
    <MainContainer onClick={() => setActive(!active)} active={active}>
      {title}
    </MainContainer>
  )
}

export default Button;
