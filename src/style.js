import {createGlobalStyle} from 'styled-components';
import {CSSTransition} from 'react-transition-group';

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    background-color: #F3F8F9;
    --main_color: #00c7cc;
    --bg_color: #F3F8F9;
    --button_color:  #dbdee2;
    --font_button_color: #9299a9;
    // --font_primary_color: #6B7D9B;
    --font_primary_color: #7e8799;
    // color: #6B7D9B;
    color: #7e8799;
    font-size: 13px;
    --main_shadow: 0 2px 4px 0 rgba(59,73,97,0.25);
    --hover_color: #2ED6DE;
  }
  
  
`;
