import styled from "styled-components";

const StyledWidget = styled.div`
  background-color: #000000;
  width: 100%;
  height: 49px;
`;

const StyledContainer = styled.ul`
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: start;

  & > li {
    width: 125px;
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    & > a {
      color: #ffffff;
    }
  }
`;

function Widget() {
  return (
    <StyledWidget>
      <StyledContainer>
        <li>
          <a href="#">개인정보처리방침</a>
        </li>
        <li>
          <a href="#">찾아오시는길</a>
        </li>
      </StyledContainer>
    </StyledWidget>
  );
}

export default Widget;
