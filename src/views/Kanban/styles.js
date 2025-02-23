import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: #FFFFFF;
  padding: 24px;
  height: 100vh;
  box-sizing: border-box;
`;

const HeaderKanban = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1900px;
`;

const BoardsKanban = styled.div`
  display: flex;
  flex-direction: row;
  height: 85%;
  width: 100%;
  max-width: 1900px;
  justify-content: center;
`;

const TitleKanban = styled.h1`
  font-size: 37px;
  color: white;
  margin-left: 20px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonKanban = styled.button`
  font-size: 18px;
  width: 140px;
  height: 40px;
  background-color: #2C2C2C;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  padding: 7px;
  cursor: pointer;
  margin-right: 20px;
`;

export {
  MainContainer,
  HeaderKanban,
  TitleKanban,
  BoardsKanban,
  TagsContainer,
  ButtonKanban
}