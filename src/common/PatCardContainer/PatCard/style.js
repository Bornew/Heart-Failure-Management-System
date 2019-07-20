import styled from 'styled-components';

export const Card = styled.div`
  margin: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  // justify-content: flex-start;
  padding: 16px;
  width: 360px;
  height: 340px;
  border-radius: 9px;
  background-color: white;
  box-shadow: var(--main_shadow);
`;

export const Avatar = styled.div `
  display: flex;
  width: 48px;
  height: 48px;
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
`;

export const IdWrapper = styled.div `
  // margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

export const Name = styled.p`
  color: var(--main_color);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: -12px;
`;

export const Id = styled.p`
  color: var(--font_primary_color);
  font-size: 13px;    
    
`;
export const Line = styled.div`
  background: #f5f5f5;
  height: 1px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BasicInfoWrapper = styled.div`
  // height: 134px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  
`;

export const BasicInfo = styled.div`
   // width: 240px;
   display: flex;
   flex-direction: column;
   color: var(--font_primary_color);
   font-size: 13px;
   font-weight: 300;
   margin-left: 10px;
   margin-right: 10px;
`;

export const HealthInfoWrapper = styled.div`
  margin-top: 10px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const HealthInfoDirect = styled.p`
   color: var(--main_color);
   font-size: 13px;
   font-weight: 300;
   margin-bottom: -5px;
   width: 28px;
`;
export const HealthInfoContent = styled.p`
   color: var(--main_color);
   font-size: 13px;
   font-weight: 400;
   margin-bottom: -5px;
`;

export const InfoDiret = styled.p`
  color: var(--font_primary_color);
  font-size: 13px;   
  font-weight: 330;
  margin-bottom: -5px;    
  width: 28px;
`;
export const InfoContent = styled.p`
  color: var(--font_primary_color);
  font-size: 13px;   
  font-weight: 400;
  margin-bottom: -5px;    
`;

export const MedicineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 50px;
  margin-right: 16px;
`;
export const ReserveButton = styled.button`
  margin-right: 24px;
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid;
  border-color: var(--main_color);
  border-radius: 3px;
  height: 28px;
  width: 88px;
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
  height: 28px;
  width: 88px;
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
