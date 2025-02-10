// css
import "./App.css"

// 패키지
import { BrowserRouter as Routers } from "react-router-dom"

// 컴퍼넌트
import { NavbarContainer, LeftContainer, MiddleContainer, RightContainer } from "./pkgs"

function App() {
  return (
    <div className="App"> 
      <Routers>

        <NavbarContainer />

        {/* 가장 많이 쓰는 컨텐츠 */}
        <div className = "mainContainer">
          <LeftContainer />
          <MiddleContainer />
          <RightContainer />
        </div>

      </Routers>
    </div>
  );
}

export default App;
