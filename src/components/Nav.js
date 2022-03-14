import styled from 'styled-components';

const MenuContets = [
  {
    name: "전공안내",
    contents: ["원예생명공학전공은?", "전공역사", "찾아오시는길"],
  },
  {
    name: "교수진",
    contents: ["현직교수", "명예교수", "퇴임교수"],
  },
  {
    name: "교육",
    contents: ["전공교과목", "이수규정", "졸업요건"],
  },
  {
    name: "입학",
    contents: ["대학입학", "대학원입학", "편입학"],
  },
  {
    name: "게시판",
    contents: ["공지사항", "학사일정", "Q&A"],
  },
];

function SubMenu(props) {
  const submenus = props.submenus.map((submenu) => (
    <li>
      <a href="#">{submenu}</a>
    </li>
  ));

  return (
      <ul className = "submenu">
          {submenus}
      </ul>
  );
}

const StyledNavi = styled.nav`
width :600px;
height : 100%;
float:right;
z-index :1;
`;

const StyledMenu = styled.ul`
width :100%;
margin-top: 10px;
display :flex;
`;

function Nav() {
  const menus = MenuContets.map((menu) => (
      <li>
          <a href = "#">{menu.name}</a>
          <SubMenu submenus = {menu.contents} />
      </li>
  ));
  
  return (
    <StyledNavi>
      <StyledMenu>
        {menus}
      </StyledMenu>
    </StyledNavi>
  );
}

export default Nav;
