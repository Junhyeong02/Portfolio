import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    list-style: none;
    font-family: "Noto Sans KR";
    color: #222328;
    text-align: center;
    margin: 0 auto;
}

a{
    text-decoration: none;
    display:block;
}

body{
    width: 100vw;
    background-color:#ffffff;
    font-size: 20px;
    
}
`;

export default GlobalStyle;
