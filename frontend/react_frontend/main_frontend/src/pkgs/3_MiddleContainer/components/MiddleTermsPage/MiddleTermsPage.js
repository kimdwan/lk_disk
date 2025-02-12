// css 파일
import "./assets/css/MiddleTermsPage.css"

export const MiddleTermsPage = () => {
  return (
    <div className="middleMainPageTermsContainer">
      {/* 전체 동의 박스 */}
      <div className="middleMainPageTermsBox">
        <label className="middleMainPageTermsCheckbox">
          <input type="middleMainPageCheckbox" />
          <strong>전체 동의하기</strong>
        </label>
        <p className="middleMainPageTermsDescription">대략적인 동의 내용 정리</p>
      </div>

      {/* 개별 약관 항목 */}
      <div className="middleMainPageTermsBox">
        <label className="middleMainPageTermsCheckbox">
          <input type="middleMainPageCheckbox" />
          <strong>약관 1</strong>
        </label>
        <textarea className="middleMainPageTermsInput" placeholder="내용..." />
      </div>

      <div className="middleMainPageTermsBox">
        <label className="middleMainPageTermsCheckbox">
          <input type="middleMainPageCheckbox" />
          <strong>약관 2</strong>
        </label>
        <textarea className="middleMainPageTermsInput" placeholder="내용..." />
      </div>

      <div className="middleMainPageTermsBox">
        <label className="middleMainPageTermsCheckbox">
          <input type="middleMainPageCheckbox" />
          <strong>약관 3</strong>
        </label>
        <textarea className="middleMainPageTermsInput" placeholder="내용..." />
      </div>

      {/* 확인 버튼 */}
      <button className="middleMainPageConfirmButton">확인</button>
    </div>
  )
}