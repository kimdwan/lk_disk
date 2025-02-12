// css
import "./assets/css/MiddleContainer.css"

// 패키지
import { Route, Routes } from "react-router-dom"
import { MiddleMainPage, MiddleSignUpPage, MiddleTermsPage } from "./components"

// 컴퍼넌트

export const MiddleContainer = () => {
  return (
    <div className = "middleContainer">
      <Routes>
        <Route path = "/" element = { <MiddleMainPage /> } />
        <Route path = "/signup/terms/" element = {<MiddleTermsPage />} />
        <Route path = "/signup/*" element = {<MiddleSignUpPage />} />
      </Routes>
    </div>
  )
}