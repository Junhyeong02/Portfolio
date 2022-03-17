import styled from 'styled-components';

const StyledLogo = styled.div`
width :400px;
height :51px;
margin :0;
display:flex;

`;

const StyledImg = styled.div`
width: 48px;
height: 51px;
`;

const StyledText = styled.div`
    width:337px;
    height : 51px;
    & > p {
        color :#FFFFFF;
        text-align:left;
        padding-left :15px;
    }

    & >p:first-child{
        font-size:24px;
        font-weight :550;
        line-height :34px;
    }
    
    & >p:last-child{
        font-size :12px;
        font-weight :300;
        ling-height :12px;
    }
`;

function BottomLogo() {
  return (
    <StyledLogo>
      <StyledImg>
        <a href="#">
          <img src="images/logo_grey.png" alt="logo" />
        </a>
      </StyledImg>
      <StyledText>
          <p>
          서울대학교 원예생명공학전공
          </p>
          <p>
          Horticultural Science and Biotechnology
          </p>
      </StyledText>
    </StyledLogo>
  );
}

export default BottomLogo;
