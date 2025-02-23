import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: #FFFFFF;
  padding: 60px;
  height: 100vh;
  box-sizing: border-box;
`;

const HeaderTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1900px;

  .MuiSelect-select {
  color: white;
  }
`;

const TitleTask = styled.input`
  font-size: 37px;
  font-weight: 700;
  color: white;
  background-color: transparent;
  border: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ButtonsTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const BodyTask = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #FFF;
  width: 100%;
  flex-direction: column;
  max-width: 1900px;
`;

const Textarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #FFFFFF;
  padding: 12px;
  border-radius: 8px;
  text-align: start;
	font-size: 16px;
	border: 1px solid #FFFFFF;
  height: 200px;
`;

export {
  MainContainer,
  TitleTask,
  HeaderTask,
  ButtonsTask,
  BodyTask,
  Textarea
}