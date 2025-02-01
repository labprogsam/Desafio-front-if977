import React from 'react';
import {Board} from '../../components'
import {
  MainContainer
} from './styles';

const Kanban = () => {
  return <MainContainer>
    <Board title="Pendente" color="#EC221F" status="pendente" />
    <Board title="Realizando" color="#7678D1" status="concluída" />
    <Board  title="Concluída" color="#00A88B" status="andamento" />
  </MainContainer>
}

export default Kanban;
