import styled from 'styled-components';

export const NameListWrapper = styled.div`
   display: flex;
   flex-direction: column;
   background: white;
   margin-right: 24px;
   width: 204px;
   height: 660px;
   background: #FFFFFF;
   box-shadow: 0 0 6px 0 rgba(23,128,224,0.14);
`;

export const NameCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    padding: 0 0 0px 16px;
    height: 72px;
    padding-color: white;
    &.active {
       background-color: #e6e8e9;    
    }
`;

export const Avatar = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  background: url(${(props) => props.imgUrl});
  background-size: 100%;
  border-radius: 100px;
  padding: none;
  margin-right: 16px;
  border: none;
`;