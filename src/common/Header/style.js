import styled from 'styled-components';

export const HeaderWrapper = styled.div `
  position: fixed;
  top: -20px;
  left: 0;
  display: flex;
  margin-top: 0;
  margin-left: 184px;
  padding-left: 30px;
  color: #6B7D9B;
  font-size: 15px;
  font-weight: 400;
  flex-direction: row;
  align-items: center;
  width: 1256px;
  height: 64px;
  padding-top: 20px;
  background-color: white;
`;

export const SearchWrapper = styled.div`
  display: flex;
  margin-left: 744px;
  align-items: center;
  justify-content: center;
  .iconfont {
  display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 100px;
    background: #fafafa;
    color: grey;
    font-size: 18px;
    &.focused{
    background: #d8d8d8;
    color: white;
  }
`;

export const SearchResultWrapper = styled.div`
  background-color: white;
  position: absolute;
  left: 1039px;
  top: 58px;
  width: 350px;
  // height: 192px;
  height: auto;
  border-radius: 5px;
  box-shadow: var(--main_shadow);
  padding: 14px 20px;
  z-index: 1000;
`;

export const SearchResultContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const InputWrapper = styled.div`
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
    .title {
    font-size: 16px;
    font-weight: 400;
    color: var(--font_primary_color);
  }
`;
export const Input = styled.input
    `
  width: 130px;
  height: 24px;
  display: flex;
  padding-left: 20px;
  padding-right: 30px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 300;
  color: #3B4961 0.4;
  margin-left: 12px;
  border: 1px solid;
  border-color: #e3e3e3;
`;

export const ResultWrapper = styled.div`
  height: 36px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .noResult {
    font-size: 14px;
    font-weight: 400;
    color: #e7050b;
  }
  .hasResult {
    font-size: 16px;
    color: var(--font_primary_color);
  }
  
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 110px;
  width: 100%px;
  height: 40px;
  margin-top: 32px;
`;
export const CancelButton = styled.button`
  display: flex;
  margin-left: 20px;
  justify-content: center;
  border: 1px solid var(--button_color);
  border-radius: 4px;
  height: 32px;
  width: 90px;
  color: var(--font_button_color);
  font-size: 14px;
  outline: none;
  cursor: pointer;
  // :hover {
  //   border-color: var(--font_button_color);
  //   color: var(--font_button_color);
  // }
  :hover {
    border-color: var(--main_color);
    color: var(--main_color);
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  margin-left: 20px;
  justify-content: center;
  background-color: var(--font_button_color);
  border: none;
  border-radius: 4px;
  height: 32px;
  width: 90px;
  color: white;
  font-size: 14px;
  outline: none;
  :hover {
    background-color: #00c7cc;
    // color: white;
  }
  cursor: pointer;
`;
export const NavSearch = styled.input.attrs(
    {
      placeholder: '搜索病人...',
    },
)`
  width: 152px;
  height: 28px;
  display: flex;
  padding-left: 20px;
  padding-right: 30px;
  border: none;
  border-radius: 100px;
  outline: none;
  font-size: 14px;
  font-weight: 300;
  color: #3B4961 0.4;
  background: #fafafa;
  margin-right: -28px;

`;

export const Add_button = styled.button `
  display: flex;
  margin-left: 20px;
  justify-content: center;
  background-color: var(--main_color);
  border: none;
  border-radius: 100px;
  height: 28px;
  width: 96px;
  color: white;
  outline: none;
  font-size: 14px;
  :hover {
    background-color: var(--hover_color);
  }
  cursor: pointer;
`;
