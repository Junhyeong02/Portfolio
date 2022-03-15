import {useState} from 'react';
import styled from 'styled-components';
import SubMenu from './SubMenu';

const MenuContents = [
  {
    name: "전공안내",
    contents: ["인사말", "전공역사", "찾아오시는길"],
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

const StyledNavi = styled.nav`
width :100%;
height : 100%;
margin-left:300px;
`;

const StyledMenu = styled.ul`
height: 100%;
display:flex;
justify-content:end;
align-items :center;

& > li {
  width: 100px;
  height: 50px;
  margin: 0 0 0 0;
}

& > li > a{
  font-weight: 700;    
  font-size : 18px;   
  line-height: 50px;
  text-align:center;
}

& > li > a:hover{
  font-weight:1000;
  color:#0F0F70;
}

`;

function Menu(props) {
  const [focus, setFocus] = useState(false);

  return (
    <li>
      <a href = "#" onMouseEnter = {() =>setFocus(true)} onMouseOut = {() =>setFocus(false)}>{props.name}</a>
      <SubMenu submenus = {props.contents} focus = {focus}/>
    </li>
  );
}

function Nav() {
  const menus = MenuContents.map((menu) => (
    <Menu name = {menu.name} contents = {menu.contents} />
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
