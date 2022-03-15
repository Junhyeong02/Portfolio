import styled, {keyframes, css} from 'styled-components';

const SlideDown = keyframes`
0%{
  height :0px;
}

100%{
  height : 120px;
}
`;

const StyledSubMenu = styled.ul`
width : 120px;
z-index:1;
display:block;
overflow :hidden;
height : 0px;

${(props) => props.focus && css`
animation :${SlideDown} 1s 0s 1 both;
`}

&:hover {
  height :120px;
}

& >li {
    background-color: #0F0F70;
    postion:absolute;
}

&>li>a{
    height:40px;
    line-height: 40px;
    font-size:12px;
    font-weight: 700;
    margin-left:12px;
    color :#FFFFFF;
    text-align: left;
}

&>li>a:hover{
  margin-left:15px;
  font-size :13px;
}



`;

function SubMenu(props) {
    const submenus = props.submenus.map((submenu) => (
      <li>
        <a href="#">{submenu}</a>
      </li>
    ));
    return (
        <StyledSubMenu focus = {props.focus}>
            {submenus}
        </StyledSubMenu>
    );
  }

  export default SubMenu;