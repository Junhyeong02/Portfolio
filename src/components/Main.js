import styled from "styled-components";

import ImgSlide from "./ImgSlide";
import Swiper from "./Swiper"

const StyledMain = styled.div`
  width: 100vw;
  padding-top: 121px;
  position:relative;
`;

function Main() {
  return (
    <StyledMain>
      <ImgSlide />
      <Swiper />
    </StyledMain>
  );
}

export default Main;
