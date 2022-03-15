import Nav from "./Nav";
import Logo from "./Logo";
import styled from "styled-components";

const Wrapper = styled.div`
width : 1240px;
height: 85px;
display:flex;
margin:0 auto;
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
