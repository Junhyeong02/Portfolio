import styled from "styled-components";
import BottomLogo from "./BottomLogo";
import BottomInfo from "./BottomInfo";

const StyledBottom = styled.div`
  width: 100%;
  height: 162px;
  background-color: #00003c;
`;

const StyledContainer = styled.div`
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

function Bottom() {
  return (
    <StyledBottom>
      <StyledContainer>
        <BottomLogo />
        <BottomInfo />
      </StyledContainer>
    </StyledBottom>
  );
}

export default Bottom;
