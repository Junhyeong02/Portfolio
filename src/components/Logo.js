import styled from 'styled-components';

const StyledLogo = styled.div`
float:left;
width :600px;
margin-top: 20px;
height : 50px;
`;

function Logo() {
  return (
    <StyledLogo>
      <a href="#">
        <img src="images/logo.jpg" alt="로고" />
      </a>
    </StyledLogo>
  );
}

export default Logo;
