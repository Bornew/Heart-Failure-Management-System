import styled from 'styled-components';

export const SelectMedicines = styled.select`
  margin: 2px;
  width: 100px;
  height: 24px;
  color: var(--main_color);
  border: 1px solid var(--main_color);
  outline: none;
`;
export const OptionMedicine = styled.option`
  color: var(--main_color);
  font-size: 13px;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Card = styled.div`
  margin: 10px 40px 40px 10px;
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  padding: 20px 26px;
  width: 650px;
  height: 600px;
  border-radius: 9px;
  background-color: white;
  box-shadow: var(--main_shadow);
`;

export const Avatar = styled.div `
  display: flex;
  width: 56px;
  height: 56px;
  margin-right: 16px;
  border: none;
  background: url(${(props) => props.imgUrl});
  background-size: 100%;
  outline: none;
  border-radius: 2100px;
  `;

export const CardHeader = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  // height: 60px;
  margin: 0px 20px;
`;

export const IdWrapper = styled.div `
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 20px 20px;
  height: 30px;
  color: var(--font_primary_color);
  font-size: 18px;
  font-weight: 400;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
`;

export const CancelButton = styled.button`
   display: flex;
   margin: 0 15px 0 0;
  justify-content: center;
  background-color: white;
  border: 1px solid;
  border-color: var(--font_primary_color);
  border-radius: 3px;
  height: 24px;
  width:58px;
  color: var(--font_primary_color);
  font-size: 13px;
  font-weight: 300;
  outline: none;
  cursor: pointer;
`;

export const CancelAddButton = styled.button`
  display: flex;
  margin: 0 15px 0 0;
  justify-content: center;
  background-color: white;
  border: 1px solid;
  border-color: var(--font_primary_color);
  border-radius: 3px;
  height: 24px;
  width:80px;
  color: var(--font_primary_color);
  font-size: 13px;
  font-weight: 300;
  outline: none;
  cursor: pointer;
`;
export const ConfirmButton = styled.button`
   display: flex;
   margin: 0 15px 0 0;
  justify-content: center;
  background-color: var(--main_color);
  border: none;
  border-radius: 3px;
  height: 24px;
  width:58px;
  color: white;
  font-size: 13px;
  font-weight: 300;
  outline: none;
  :hover {
    background-color: var(--hover_color);
  }
  ::after{
    background-color: var(--hover_color);
  }
  cursor: pointer;
`;


export const ConfirmAddButton = styled.button`
  display: flex;
  margin: 0 15px 0 0;
  justify-content: center;
  background-color: var(--main_color);
  border: none;
  border-radius: 3px;
  height: 24px;
  width:80px;
  color: white;
  font-size: 13px;
  font-weight: 300;
  outline: none;
  :hover {
    background-color: var(--hover_color);
  }
  ::after{
    background-color: var(--hover_color);
  }
  cursor: pointer;
`;
export const Name = styled.div`
  display: flex;
  flex-direction: center;
  color: var(--main_color);
  font-size: 18px;
  font-weight: 500;
  margin-left: 2px;
  margin-right: 20px;
`;

export const Id = styled.div`
  color: var(--font_primary_color);
  font-size: 18px;
  font-weight: 400;    
`;

export const Time = styled.div`
  color: var(--font_primary_color);
  font-weight: 300;
  font-size: 16px;    
  margin-left: 30px;
`;

export const Line = styled.div`
  background: #f5f5f5;
  height: 1px;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  margin-left: 10px;
`;

export const MedicineInfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 400px;
`;
export const MedicinesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  width: auto;
  height: auto;
`;

export const MedicineDeletableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  height: 28px;
  align-items: center;
  justify-content: center;
`;
export const DeleteButton = styled.div`
   outline: none;
   display: flex;
   background: white;
   color: red;
   :hover {
      border: red 1px solid;
      color: red;
   }
  width: 14px;
  height: 14px;
  padding: 0;
  border: red 1px solid;
  background: white;
  color: red;
  margin-left: -12px;
  margin-top: -24px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
export const MedicineInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--main_color);
  border-radius: 100px;
  width: 80px;
  height: 24px;
  font-size: 13px;
  font-weight: 400;
  color: var(--main_color);
 `;
export const BasicInfo = styled.div`
   // width: 240px;
   width: 60px;
   display: flex;
   flex-direction: column;
   color: var(--font_primary_color);
   font-size: 14px;
   font-weight: 300;
   margin-left: 10px;
   
`;

export const BasicInfoResult = styled.div`
   width: 60px;
   display: flex;
   flex-direction: column;
   color: var(--font_primary_color);
   font-size: 14px;
   font-weight: 300;
   margin-left: 10px;
   margin-right: 50px;
`;
export const BasicInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  margin-bottom: 30px;
`;

export const MedicineInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const HealthInfoWrapper = styled.div`
  margin-top: 10px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const HealthInfoDirect = styled.div`
   color: var(--main_color);
   font-size: 16px;
   font-weight: 300;
   margin-bottom: 10px;
   width: 28px;
`;
export const HealthInfoContent = styled.div`
   color: var(--main_color);
   font-size: 16px;
   font-weight: 400;
   margin-bottom: 10px;
`;

export const InfoDiret = styled.div`
  color: var(--font_primary_color);
  font-size: 14px;   
  font-weight: 330;
  margin-bottom: 10px;    
  width: 60px;
  height: 20px;
`;
export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--font_primary_color);
  width: 100px;
  height: 20px;
  font-size: 14px;   
  font-weight: 400;
  margin-bottom: 10px;   
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  height: 20px;
  width: 40px;
  background: transparent;
  border-radius: 3px;
  border: none;
  color: var(--font_primary_color);
  font-size: 14px;   
  font-weight: 400;
  align-items: center;
  outline: none;
  justify-content: center;
`;

export const DataContent = styled.div`
  color: var(--font_primary_color);
  width: 300px;
  font-size: 14px;   
  font-weight: 400;
  margin-bottom: 10px;   
  height: 20px;
`;

export const MedicineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 0px;
  margin-left: 96px;
`;
export const ReserveButton = styled.button`
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid;
  border-color: var(--main_color);
  border-radius: 3px;
  height: 34px;
  width:88px;
  color: var(--main_color);
  font-size: 13px;
  font-weight: 300;
  outline: none;
  :hover{
    border-color: var(--hover_color);
    color:var(--hover_color);
  }
  
  ::after{
    border-color: var(--hover_color);
    color:var(--hover_color);
  }
  cursor: pointer;
  
  
`;

export const MessageButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: var(--main_color);
  // border: 2px solid;
  border: none;
  // border-color: var(--main_color);
  border-radius: 3px;
   height: 34px;
  width:88px;
  color: white;
  font-size: 13px;
  font-weight: 300;
  outline: none;
  :hover {
    background-color: var(--hover_color);
  }
  ::after{
    background-color: var(--hover_color);
  }
  cursor: pointer;
  
`;

export const MedicalHeader = styled.div`
  // background-color: var(--main_color);
  // color: white;
  display: flex;
  font-size: 16px;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  border-radius: 8px 8px 0 0;
  margin: 0 0 10px 40px;
  height: 56px;
  width: 350px;
  // padding:0 26px;
`;

export const MedicalWrapper = styled.div`
  padding: 20px 16px;
  margin: 10px 40px 40px 10px;
  display: flex;
  flex-direction: column;
  // padding: 0 26px;
  width: 340px;
  height: 400px;
   display: flex;
   align-items: center;
   border-radius: 8px;
   background-color: white;
   box-shadow: 0 0 6px 0 rgba(23,128,224,0.14);
`;

export const MedicalContent = styled.div`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  width: 320px;
  height: 300px;
  margin-top: 14px;
  margin-left: 14px;
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
  font-size: 14px;
  font-color: var(--font_primary_color);
`;

export const MedicalSender = styled.input`
  display: flex;
  border: none;
  outline: none;
  color: var(--font-primary-color);
  padding: 8px;
  width: 300px;
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
