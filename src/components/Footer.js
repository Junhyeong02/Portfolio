function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="row-container">
          <div className="row-quick">
            <ul className="row-quick-element">
              <li>
                <a href="#">개인정보처리방침</a>
              </li>
              <li>
                <a href="#">찾아오시는길</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-container">
          <div className="bottom-element">
            <div className="bottom-logo">
              <div className="bottom-logo-image">
                <a href="#">
                  <img src="images/logo_grey.png" alt="logo" />
                </a>
              </div>
              <div className="bottom-logo-text-ko">서울대학교 원예생명공학전공</div>
              <div className="bottom-logo-text-en">
                Horticultural Science and Biotechnology
              </div>
            </div>
            <div className="bottom-info-container">
              <div className="bottom-info">
                서울시 관악구 관악로1 200동 3119호 T. 02-880-4578 F. 02-873-2056
              </div>
              <div className="copyright">
                Copyright ⓒ 2020 Horticultural Science and Biotechnology
                Program, CALS, SNU. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;