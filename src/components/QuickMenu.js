import styled from "styled-components";

const QuickMenu_Inner = styled.div`
  width: 1240px;
  height: 100%;
`;

const ShortCut = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  & >li {
    width :80px;
    flex: none;
    margin :0 0 0 0 ;
  }

  & > li > a {
    color: #ffffff;
    font-size :13px;
    font-weight: 700;
  }

  & > li:hover > a {
    color: #0f0f70;
  }
`;

function QuickMenu() {
  const contents = ["HOME", "CONTACT", "ENGLISH"];
  const quick = contents.map((content) => (
    <li>
      <a href="#">{content}</a>
    </li>
  ));

  return (
    <QuickMenu_Inner>
      <ShortCut>{quick}</ShortCut>
    </QuickMenu_Inner>
  );
}

export default QuickMenu;
