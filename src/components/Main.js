import styled from 'styled-components';

const StyledImgSlide = styled.div`
width :100vw;
height: 700px;
margin :auto;

& >a >img{
    width :100%;
    height :700px;
    object-fit:cover;
}
`;

function Main() {
    return (
    <StyledImgSlide>
        <a href = "#"><img src = "images/slide1.jpg" alt  = "이미지슬라이드" /></a>
    </StyledImgSlide>
    );
}

export default Main;