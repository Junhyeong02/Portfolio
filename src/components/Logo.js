import styled from 'styled-components';

const StyledLogo = styled.div`
width :300px;
display:flex;
height : 100%;
align-items:center;
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
