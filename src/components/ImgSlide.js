import styled from "styled-components";

const StyledImgSlide = styled.div`
  & > a > img {
    width: 100%;
    height: 648px;
    object-fit: cover;
  }
`;

function ImgSlide() {
  return (
    <StyledImgSlide>
      <a href="#">
        <img src="images/slide1.jpg" alt="이미지슬라이드" />
      </a>
    </StyledImgSlide>
  );
}

export default ImgSlide;
