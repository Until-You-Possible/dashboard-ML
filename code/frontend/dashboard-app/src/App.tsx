import React from 'react';
import "./css/App.css"
import { Routes, Route, Navigate } from "react-router-dom";
import MenuSet from "./component/Menu/Index";
import ContentHeader from "./component/ContentHeader/Index";
import WhatIsAI from "./view/WhatIsAI/Index";
import WhatIsML from "./view/WhatIsML/Index";
import HowToStart from "./view/HowToStart/Index";
import IrisData from "./view/IrisData/Index";

function App() {

  return (
      <div className="AppContainer">
          <header className="headerContainer headerContainerWidth">
              <ContentHeader  />
          </header>
          <nav className="navContainer">
              <div className="navListWrap">
                  <MenuSet />
              </div>
          </nav>
          <main className="mainContainer">
              <div className="mainInnerContainer">
                  <Routes>
                      <Route path="/" element={<Navigate to="/what_is_the_ai" />} />
                      <Route path="/what_is_the_ai" element={<WhatIsAI />} />
                      <Route path="/what_is_the_ml" element={<WhatIsML />} />
                      <Route path="/how_to_start" element={<HowToStart />} />
                      <Route path="/iris_data" element={<IrisData />} />
                  </Routes>
              </div>
          </main>
      </div>
  );
}

export default App;
