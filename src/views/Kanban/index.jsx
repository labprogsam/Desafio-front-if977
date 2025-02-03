import React from 'react';
import {Board} from '../../components'
import Button from './Button';
import {
  MainContainer,
  HeaderKanban,
  TitleKanban,
  BoardsKanban,
  TagsContainer,
  ButtonKanban
} from './styles';

const Kanban = () => {
  return <MainContainer>
    <HeaderKanban>
      <TitleKanban>Kanban</TitleKanban>
      <TagsContainer>
        <Button title="Pendente" />
        <Button title="Realizando" />
        <Button title="Concluída" />
        <ButtonKanban>Criar atividade</ButtonKanban>
      </TagsContainer>
    </HeaderKanban>
    <BoardsKanban>
      <Board title="Pendente" color="#EC221F" status="pendente" />
      <Board title="Realizando" color="#7678D1" status="concluída" />
      <Board  title="Concluída" color="#00A88B" status="andamento" />
    </BoardsKanban>
  </MainContainer>
}

export default Kanban;
