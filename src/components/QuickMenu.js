import styled from 'styled-components';

const QuickMenu_Inner = styled.div`
width :1240px;
height :100%;
margin :auto;
`;

const ShortCut = styled.ul`
width :210px;
height :100%;
margin-right :0;
float:right;
margin-top:10px;
height : 100%;
`;

const StyledLi = styled.li`
  width :70px;
  float:left;

  & > a {
    color :#ffffff;
    font-weight :700;
  }

  &:hover > a {
    color :#0F0F70;
  }
`;

function QuickMenu() {
  const contents = ['Home', 'CONTACT', 'ENGLISH'];
  const quick = contents.map((content) => (
   <StyledLi><a href = "#">{content}</a></StyledLi>
  ));

  return (
    <QuickMenu_Inner>
      <ShortCut>
        {quick}
      </ShortCut>
    </QuickMenu_Inner>
  );
}

export default QuickMenu;
