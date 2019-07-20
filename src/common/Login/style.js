import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #00c8ce;
`;

export const LoginPanel = styled.div`
    // width: 576px;
    width: auto;
    display: flex;
    flex-direction: column;
    // align-items: center;
    color:  #7e8799;
    font-size: var(--font-size);
    height: auto;
    background: white;
    border-radius: 10px;
    box-shadow: var(--main_shadow);
    // padding: 0 60px 20px 60px;
`;

export const TitlePanel = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: center;
    margin-bottom: 20px;
`;
export const CheckId = styled.div`
    height: 50px;
    width: 300px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 13px;
`;
export const ContentPanel = styled.div`
  width: 100%;
  //height: 280px;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 64px;
`;
export const LeftPanel = styled.div`
  height: 100%;
  width: 280px;
  margin-left: 50px;
  margin-right: 10px;
  font-size: 13px;
  color:  #7e8799;
  display: flex;
  flex-direction: column;
`;

export const RightPanel = styled.div`
  margin-left: 10px;
  height: 100%;
  width: 280px;
  font-size: 13px;
  color:  #7e8799;
  display: flex;
  flex-direction: column;
`;

export const SubTitlePanel = styled.div`
  width: 90px;
  display: flex;
  // background: red;
`;

export const SubTitlePanel2 = styled.div`
  width: 70px;
  display: flex;
  // background: red;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  width: auto;
  margin-left: 18px;
  flex-direction: row;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  left: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

export const RadioButtonLabel2 = styled.label`
  position: absolute;
  left: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-left: 10px;
  margin-right: 4px;
  &:hover ~ ${RadioButtonLabel} {
    // background: #bebebe;
    &::after {
      content: "";
      margin: 2px;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    // background: #db7290;
    // border: 1px solid #db7290;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      margin: 2px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: #00c8ce;
    }
  }
`;

export const RadioButton2 = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-left: 10px;
  margin-right: 4px;
  &:hover ~ ${RadioButtonLabel2} {
    // background: #bebebe;
    &::after {
      content: "";
      margin: 2px;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel2} {
    // background: #db7290;
    // border: 1px solid #db7290;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      margin: 2px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: #00c8ce;
    }
  }
`;

export const SubContent = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  font-size: 13px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.input
    `
  margin-left: 14px;
  width: 100px;
  height: 23px;
  display: flex;
  padding-left: 20px;
  padding-right: 30px;
  border: none;
  border-radius: 45px;
  outline: none;
  font-size: 13px;
  font-weight: 300;
  color: #7e8799;
  background: #f2f3f8;
  // border: 1px solid;
  // border-color: #e3e3e3;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
`;
export const Button = styled.button `
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c8ce;
  border: 1px solid;
  border-color: white;
  border-radius: 6px;
  height: 40px;
  width: 250px;
  color: white;
  font-size: 13px;
  :hover {
    // border-color: var(--main_color);
    background: #2ED6DE;
  }
  margin-bottom: 24px;
  cursor: pointer;
`;

export const ChangeModeLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  margin-bottom: 50px;
`;
export const ChangeMode = styled.button`
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  color: #00c8ce;
  :hover {
    color: #2ED6DE;
    }
  cursor: pointer;
`;

export const LoginPanelContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;