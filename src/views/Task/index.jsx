import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  MainContainer,
  TitleTask,
  HeaderTask,
  ButtonsTask,
  BodyTask,
  Textarea
} from './styles';
import { useAxios } from '../../Global/useAxios';

const Task = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [axiosGet] = useAxios('get');
  const [axiosPost] = useAxios('post');
  const [axiosPut] = useAxios('put');
  const [axiosDelete] = useAxios('delete');
  const [task, setTask] = useState({
    descricao: "Digite a descrição...",
    status: "pendente",
    titulo: "Titulo da tarefa"
  });
 
  useEffect(() => {
      const getData = async () => {
        await axiosGet({
          url: `/tarefas/${id}`,
          error: (error) => {
            alert(error);
          },
          success: async (response) => {
            setTask(response.data);
          },
        });
      };
      if (id) {
        getData();
      }
    }, [id]);

  const onChange = (field, e) => {
    setTask({
      ...task,
      [field]: e.target.value
    })
  }

  const handleDelete = async () => {
    await axiosDelete({
      url: `/tarefas/${id}`,
      success: () => {
        alert("Task removida com sucesso!");
        navigate('/', { replace: true });
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  const handleEdit = async () => {
    const url = id ? `/tarefas/${id}` : `/tarefas`
    const body = {
      titulo: task.titulo,
      descricao: task.descricao,
      status: task.status,
    }

    if (!id) {
      await axiosPost({
        url: url,
        body: body,
        success: () => {
          alert("Task criada com sucesso!" )
          navigate('/', { replace: true });
        },
        error: (error) => {
          alert(`${error}`)
        }
      });
    } else {
        await axiosPut({
          url: url,
          body: body,
          success: () => {
            alert("Task atualizada com sucesso!" )
            navigate('/', { replace: true });
          },
          error: (error) => {
            alert(`${error}`)
          }
        });
    }
  };

  return (
    <MainContainer>
      <HeaderTask>
        <TitleTask value={task?.titulo} onChange={(e) => onChange('titulo', e)} />
        <ButtonsTask>
          <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={task?.status}
              label="Status"
              onChange={(e) => onChange('status', e)}
            >
              <MenuItem value="concluída">Concluída</MenuItem>
              <MenuItem value="pendente">Pendente</MenuItem>
              <MenuItem value="realizando">Realizando</MenuItem>
            </Select>
          </FormControl>
          {id && <Button onClick={handleDelete} title="Deletar atividade" color="#F5F5F5" background="#EC221F" />}
          <Button onClick={handleEdit} title={id ? "Editar informações" : "Criar"} color="#F5F5F5" background="#2C2C2C" />
        </ButtonsTask>
      </HeaderTask>
      <BodyTask>
        <h2>Descrição</h2>
        <Textarea value={task?.descricao} onChange={(e) => onChange('descricao', e)} placeholder='testando' />
      </BodyTask>
    </MainContainer>
  )
}

export default Task;
