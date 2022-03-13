import Nav from "./Nav";
import Logo from "./Logo";
import styled from "styled-components";

const Wrapper = styled.div`
width :1240px;
height: 100%;
margin: auto;
`;

function Container() {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  );
}

export default Container;
