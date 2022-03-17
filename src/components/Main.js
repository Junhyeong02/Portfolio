import styled from "styled-components";

import ImgSlide from "./ImgSlide";

const StyledMain = styled.div`
  width: 100vw;
  height: 648px;
  padding-top: 121px;
`;

function Main() {
  return (
    <StyledMain>
      <ImgSlide />
    </StyledMain>
  );
}

export default Main;
