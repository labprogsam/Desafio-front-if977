import React, { useState } from 'react';
import {
	InputContainer
} from './styles';

const Input = ({ value, onChange }) => {
  return (
		<InputContainer value={value} onChange={(e) => onChange(e)} placeholder='Buscar...' />
	)
}

export default Input;
