import styled from 'styled-components';

import React from "react";
import QuickMenu from "./QuickMenu";
import Container from "./Container";

const StyledHeader = styled.header`
width : 100%;
height :121px;
background-color: #ffffff;
position : fixed;
z-index:1;
`;

const StyledQuick = styled.div`
width :100%;
height : 36px;
font-size : 12px;
background-color: #69A0E0;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledQuick>
        <QuickMenu />
      </StyledQuick>
      <Container />
    </StyledHeader>
  );
}

export default Header;
