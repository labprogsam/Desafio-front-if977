import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #FFFFFF;
  padding: 24px;
  height: 100vh;
  box-sizing: border-box;
`;

const HeaderTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .MuiSelect-select {
  color: white;
  }
`;

const TitleTask = styled.h1`
  font-size: 37px;
  font-weight: 700;
  color: white;
`;

const ButtonsTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export {
  MainContainer,
  TitleTask,
  HeaderTask,
  ButtonsTask
}