import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Board, Input} from '../../components'
import {
  MainContainer,
  HeaderKanban,
  TitleKanban,
  BoardsKanban,
  TagsContainer,
  ButtonKanban
} from './styles';
import { useAxios } from '../../Global/useAxios';

const Kanban = () => {
  let navigate = useNavigate();
  const [axiosGet] = useAxios('get');
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  const filteredData = items.filter((el) => {
    if (search === '') {
      return el;
    }

    else {
      return el.titulo.toLowerCase().includes(search) || el.descricao.toLowerCase().includes(search)
    }
})

  useEffect(() => {
    const getData = async () => {
      await axiosGet({
        url: `/tarefas`,
        error: () => {
          console.log("Deu erro")
        },
        success: async (response) => {
          setItems(response.data);
        },
      });
    };
    getData();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  return <MainContainer>
    <HeaderKanban>
      <TitleKanban>Kanban</TitleKanban>
      <TagsContainer>
        <Input value={search} onChange={(e) => onChange(e)} />
        <ButtonKanban onClick={() => navigate('/task?criar=true', { replace: true })}>Criar atividade</ButtonKanban>
      </TagsContainer>
    </HeaderKanban>
    <BoardsKanban>
      <Board title="Pendente" color="#EC221F" status="pendente" items={filteredData} />
      <Board title="Realizando" color="#7678D1" status="realizando" items={filteredData} />
      <Board title="Concluída" color="#00A88B" status="concluída" items={filteredData} />
    </BoardsKanban>
  </MainContainer>
}

export default Kanban;
