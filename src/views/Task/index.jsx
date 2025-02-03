import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  MainContainer,
  TitleTask,
  HeaderTask,
  ButtonsTask 
} from './styles';

const Task = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <MainContainer>
      <HeaderTask>
        <TitleTask>Audio recording</TitleTask>
        <ButtonsTask>
          <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="concluida">Concluída</MenuItem>
              <MenuItem value="pendente">Pendente</MenuItem>
              <MenuItem value="realizando">Realizando</MenuItem>
            </Select>
          </FormControl>
          <Button title="Deletar atividade" color="#F5F5F5" background="#EC221F" />
          <Button title="Editar informações" color="#F5F5F5" background="#2C2C2C" />
        </ButtonsTask>
      </HeaderTask>
    </MainContainer>
  )
}

export default Task;
