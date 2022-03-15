import styled from "styled-components";

const StyledSide = styled.div`
  position: fixed;
  width: 130px;
  background-color: #ffffff;
  right: 0;
  top: 200px;

  & > ul {
    display: flex;
    flex-direction: column;
  }

  & > ul > li {
    width: 100%;
    height: 60px;
    border-top: #cacaca solid 1px;
  }

  & > ul > li:first-child {
    background-color: #0f0f70;

    & > a {
      color: #ffffff;
      font-family: "Lato";
      font-weight: 600;
      width: 60%;
      height: 30px;
      line-height: 15px;
      padding-top: 15px;
    }
  }

  & > ul > li:last-child {
    background-color: #333333;
    width: 100%;
    height: 30px;

    & > a {
      color: #ffffff;
      line-height: 30px;
      font-size: 14px;
      font-weight: 400;
      padding-top: 0px;
    }
  }

  & a {
    width: 80%;
    line-height: 16px;
    padding-top: 22px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.4px;
    text-decoration: none solid rgb(51, 51, 51);
  }
`;

function Side() {
  const sideContents = [
    "QUICK MENU",
    "서울대학교",
    "마이스누",
    "농생대",
    "식물생산과학부",
    "TOP",
  ];

  const sideBar = sideContents.map((content) => (
    <li>
      <a href="#">{content}</a>
    </li>
  ));

  return (
    <StyledSide>
      <ul>{sideBar}</ul>
    </StyledSide>
  );
}

export default Side;
