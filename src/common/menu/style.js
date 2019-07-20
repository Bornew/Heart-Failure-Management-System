import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  top: -20px;
  padding-top: 20px;
  padding-left: 20px;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  left: -20px;
  width: 184px;
  height: 1000px;
  position: fixed;
  background: #1A1B27;    
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 10px;
  color: white;
`;
// export const Avatar = styled.a.attrs({
//   href: '/',
// }) `
//   display: flex;
//   width: 46px;
//   height: 46px;
//   border-radius: 100px;
//   // background-color: white;
//   background: url(${(props)=>props.imgUrl});
//   margin-right: 16px;
// `;

export const Avatar = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  border-radius: 100px;
  // background-color: white;
  background: url(${(props) => props.imgUrl});
  background-size: 100%;
  margin-right: 16px;
`;
export const MenuItems = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  height: 408px;
  justify-content: space-between;
`;
export const MenuItem = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 88px;
  height: 88px;
  text-align: center;
  &.active {
    border-radius: 10px;
    background-color: #00e1d7;
    color: #1A1B27;
  }
  :hover {
    border-radius: 10px;
    background-color: #8CEEEA;
    // color: #1A1B27;
    &>svg {
      // fill: #1A1B27;
    }
  }
  
   
`;
export const Logo = styled.svg `
  display: flex;
  width: 32px;
  height: 32px;
  fill: white;
  margin-bottom: 10px;

  &.active {
    fill: #1A1B27;
    
  }
  `;

export const Button = styled.button `
  outline: none;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  background-color: transparent;
  border: 1px solid;
  border-color: white;
  border-radius: 4px;
  height: 40px;
  width: 126px;
  color: white;
  font-size: 14px;
  :hover {
    border-color: var(--main_color);
    color: var(--main_color);
  }
  cursor: pointer;
`;
