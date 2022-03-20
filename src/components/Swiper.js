import styled from "styled-components";

const StyledSwiper = styled.div`
  width: 50vw;
  height: 600px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.65);
  top: 121px;
  left: 0px;
  display: flex;
  align-items: center;

  & div {
    & > div {
      color: white;
      text-align: left;
      word-spacing: 0;
    }

    & > div:first-child {
      font-size: 45px;
      font-weight: 550;
      line-height: 50px;
    }
    & > div:nth-child(2) {
      margin-top: 10px;
      font-size: 18px;
      color: white;
      height :30px;
    }
  }
`;

const StyledButton = styled.div`
  height: 40px;
  width: 120px;
  border: 1px solid #ffffff;
  margin: 60px 0 0 0;

  &:hover {
    background-color: #00003c;
    border: 1px solid #00003c;
  }
  & a {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: 40px;
  }
`;

const StyledUl = styled.ul`
position :absolute;
right :40px;
bottom:40px;
width : 120px;
display:flex;
justify-contents : space-between;

& > li {
    width : 40px;
    height :40px;
    border-radius :50%;
    border: 1px solid #FFFFFF;
}
`;

function SwipeButton() {
    return (
        <StyledUl>
            <li>Prev</li>
            <li>Next</li>
        </StyledUl>
    );
}

function Swiper() {
  return (
    <StyledSwiper>
      <div>
        <div>
          HORTICULTURAL SCIENCE <br />
          AND BIOTECHNOLOGY
        </div>
        <div>서울대학교 원예생명공학전공</div>
        <StyledButton>
          <a href="#">자세히보기</a>
        </StyledButton>
      </div>
      <SwipeButton />
    </StyledSwiper>
  );
}

export default Swiper;
