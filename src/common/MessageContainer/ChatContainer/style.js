import styled from 'styled-components';

export const ChatWrapper = styled.div`
   display: flex;
   align-items: space-between;
   flex-direction: row;
   flex-wrap: wrap;
   width: 450px;
   justify-content: center;
   height: 660px;
   border-radius: 8px;
   background-color: white;
   box-shadow: 0 0 6px 0 rgba(23,128,224,0.14);
`;

export const ChatContent = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  width: 450px;
  height: 348px;
  margin-top: 32px;  
  padding: 0 20px;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-bottom: 18px;
  justify-content: flex-start;
  .self {
    margin-bottom: 18px;
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    color: white;
    background-color: var(--main_color);
  }
`;

export const PatientMessageWrapper = styled.div`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--font_primary_color);
`;

export const DoctorMessageWrapper = styled.div`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--font_primary_color);
`;
export const MyChatBox = styled.div`
  margin-bottom: 18px;
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  color: white;
  justify-content: flex-end;
`;

export const Avatar = styled.div`
  display: flex;
  background: url(${(props) => props.imgUrl});
  background-size: 100%;
  border: none;
  border-radius: 300px;
  height: 46px;
  width: 46px;
`;

export const DoctorMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 23px;
  color: white;
  height: auto;
  width: auto;
  background-color: var(--main_color);
  justify-content: center;
  font-weight: 400;
  flex-wrap: wrap;
  padding:  0px 12px;
  border-radius: 4px;
  margin-top: 4px;
  justify-content: center;
`;

export const PatientMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--font_primary_color);
  height: auto;
  width: auto;
  background-color: #ededed;
  justify-content: center;
  font-weight: 400;
  flex-wrap: wrap;
  padding:  0px 12px;
  border-radius: 4px;
  margin-top: 4px;
  justify-content: center;
  .self {
    justify-content: flex-end;
    color: white;
    margin-right: 23px;
  }
  .content {
    display: flex;
    flex-direction: row;
    word-break: break-all;
    flex-wrap: wrap;
    font-size: 14px;
  }
  .name {
    display: flex;
    flex-direction: row;
    word-break: break-all;
    flex-wrap: wrap;  
    font-size:  18px !important;
  }
`;

export const MessageSender = styled.input`
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