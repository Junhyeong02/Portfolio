import Widget from './Widget';
import Bottom from './Bottom';

import styled from 'styled-components';

const StyledFooter = styled.footer`
width :100vw;
height : 211px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Widget />
      <Bottom />
    </StyledFooter>
  );
}

export default Footer;