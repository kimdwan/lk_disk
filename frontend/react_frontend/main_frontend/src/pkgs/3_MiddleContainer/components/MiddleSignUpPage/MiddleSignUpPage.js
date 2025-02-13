import "./assets/css/MiddleSignUpPage.css";
import logo from "./assets/img/logo.webp";

export const MiddleSignUpPage = () => {
  return (
    <div className="middleMainPageSignUpContainer">
      <div className="middleMainPageAccountContainer">
        {/* 제목 & 로고 */}
        <div className="middleMainPageAccountHeader">
          <img src={logo} alt="Logo" className="middleMainPageAccountLogo" />
          <span>계정 생성</span>
        </div>

        {/* 이메일 그룹 */}
        <div className="middleMainPageInputGroup">
          <div className="middleMainPageInputWithButton">
            <input type="email" className="middleMainPageAccountInput" placeholder="이메일" />
            <button className="middleMainPageCheckButton">전송</button>
          </div>
          <div className="middleMainPageInputWithButton">
            <input type="text" className="middleMainPageAccountInput" placeholder="이메일 확인 메시지" />
            <button className="middleMainPageCheckButton">확인</button>
          </div>
        </div>

        {/* 비밀번호 그룹 */}
        <div className="middleMainPageInputGroup">
          <div className="middleMainPageInputWithButton">
            <input type="password" className="middleMainPageAccountInput" placeholder="비밀번호" />
          </div>
          <div className="middleMainPageInputWithButton">
            <input type="password" className="middleMainPageAccountInput" placeholder="비밀번호 확인" />
          </div>
        </div>

        {/* 닉네임 & 생년월일 그룹 */}
        <div className="middleMainPageInputGroup">
          <div className="middleMainPageInputWithButton">
            <input type="text" className="middleMainPageAccountInput" placeholder="닉네임" />
            <button className="middleMainPageCheckButton">확인</button>
          </div>
          <div className="middleMainPageInputWithButton">
            <input type="text" className="middleMainPageAccountInput" placeholder="생년월일" />
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <button className="middleMainPageSignUpButton">회원가입</button>
      </div>
    </div>
  );
};
