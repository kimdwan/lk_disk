// CSS 파일 임포트
import "./assets/css/MiddleMainPage.css";

// 이미지 파일 임포트
import logo from "./assets/img/logo.png";
import googleLogo from "./assets/img/googlelogo.png";
import appleLogo from "./assets/img/applelogo.png";

export const MiddleMainPage = () => {
  return (
    <div className="middleMainPageContainer">
      {/* 왼쪽: 로고 */}
      <div className="middleMainPageLeftContainer">
        <img src={logo} alt="Logo" className="middleMainPageLogo" />
      </div>

      {/* 오른쪽: 가입 & 로그인 */}
      <div className="middleMainPageMiddleContainer">
        <div className="middleMainPageAuthBox">
          <h2 className="middleMainPageAuthTitle">지금 가입하세요.</h2>

          <button className="middleMainPageAuthButton middleMainPageGoogle">
            <img src={googleLogo} alt="Google" className="middleMainPageIcon" />
            Google 계정으로 가입하기
          </button>

          <button className="middleMainPageAuthButton middleMainPageApple">
            <img src={appleLogo} alt="Apple" className="middleMainPageIcon" />
            <strong>Apple에서 가입하기</strong>
          </button>

          <div className="middleMainPageSeparator">또는</div>

          <button className="middleMainPageAuthButton middleMainPageCreate">
            계정 만들기
          </button>

          <div className="middleMainPageLoginBox">
            <p className="middleMainPageLoginText">이미 가입을 했다면</p>
            <button className="middleMainPageAuthButton middleMainPageLogin">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
