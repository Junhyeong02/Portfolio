import styled from "styled-components";

const StyledInfo = styled.div`
  padding-left: 20px;
  height: 51px;
  margin :0;

  & > p {
    color: #ffffff;
    text-align: left;
  }

  & > p:first-child {
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
  }

  & > p:last-child {
    font-size: 10px;
    line-height: 21px;
  }
`;

function BottomInfo() {
  return (
    <StyledInfo>
      <p>(08826) 서울시 관악구 관악로1 200동 3119호 T. 02-880-4578 F. 02-873-2056</p>
      <p>
        Copyright ⓒ 2022 Horticultural Science and Biotechnology Program, CALS,
        SNU. All Rights Reserved.
      </p>
    </StyledInfo>
  );
}

export default BottomInfo;
