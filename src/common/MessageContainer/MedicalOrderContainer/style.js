import styled from 'styled-components';
export const MedicalHeader = styled.div`
  background-color: var(--main_color);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 8px 8px 0 0;
  position: fixed;
  height: 64px;
  width: 450px;
`;


export const MedicalWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-right: 24px;
   flex-direction: column;
   // flex-wrap: wrap;
   width: 450px;
   height: 660px;
   border-radius: 8px;
   background-color: white;
   box-shadow: 0 0 6px 0 rgba(23,128,224,0.14);
`;

export const MedicalContent = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  width: 400px;
  height: 348px;
  margin-top: 64px;
  
`;

export const DateBox = styled.div`
  display: flex;
  font-size: 14px;
  margin: 16px 0 8px 0;
  font-weight: 300;
`;

export const MedicalBox = styled.div`
  display: flex;
  border: 1px solid;
  border-color: #f5f5f5;
  padding: 8px;
  font-size: 13px;
  font-color: var(--font_primary_color);
`;

export const MedicalSender = styled.input`
  display: flex;
  border: none;
  outline: none;
  color: var(--font-primary-color);
  padding: 8px;
  width: 400px;
  height: 100px;
  font-size: 14px;
  ::placeholder {
    color: #acb2bf;
  }
  word-wrap: break-word; 
  word-break: normal; 
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 88%;
  align-items: right;
`;

export const Button = styled.button `
  display: flex;
  justify-content: center;
  background-color: var(--main_color);
  border: none;
  border-radius: 3px;
  height: 36px;
  width: 88px;
  color: white;
  font-size: 14px;
  font-weight: 300;
  outline: none;
  :hover {
    background-color: var(--hover_color);
  }
  ::after{
    background-color: var(--hover_color);
  }
`;