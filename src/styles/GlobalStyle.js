import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0 auto;
    padding: 0;
    list-style: none;
    font-family: "Noto Sans KR";
    color: #222328;
    text-align: center;
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
