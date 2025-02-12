import "./assets/css/MiddleLoginPage.css";

// 이미지
import logo from "./assets/img/logo.webp";
import googlelogo from "./assets/img/googlelogo.png";
import applelogo from "./assets/img/applelogo.png";

export const MiddleLoginPage = () => {
  return (
    <div className="middleLoginPageMiddleContainer">
      <div className="middleLoginPageLoginContainer">
        {/* 상단 로그인 제목 */}
        <div className="middleLoginPageLoginHeader">
          <img src={logo} alt="Logo" className="middleLoginPageLoginLogo" />
          <span>로그인 하기</span>
        </div>

        {/* 로그인 입력 폼 */}
        <div className="middleLoginPageLoginForm">
          <input type="email" className="middleLoginPageLoginInput" placeholder="이메일" />
          <input type="password" className="middleLoginPageLoginInput" placeholder="비밀번호" />
          <button className="middleLoginPageLoginButton">로그인</button>
        </div>

        {/* 다른 계정으로 로그인 (Google & Apple) */}
        <div className="middleLoginPageSocialLoginContainer">
          <span className="middleLoginPageSocialText">다른 계정으로 로그인 하기</span>
          <div className="middleLoginPageSocialButtons">
            <img src={googlelogo} alt="Google 로그인" className="middleLoginPageSocialButton" />
            <img src={applelogo} alt="Apple 로그인" className="middleLoginPageSocialButton" />
          </div>
        </div>
      </div>
    </div>
  );
};
