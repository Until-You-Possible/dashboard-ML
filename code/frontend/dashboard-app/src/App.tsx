import React from 'react';
import "./css/App.css"
import Overview from "./view/Overview/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import MenuSet from "./component/Menu/Index";
import ContentHeader from "./component/ContentHeader/Index";
import ML from "./view/ML/Index";
import WhatIsAI from "./view/WhatIsAI/Index";
import WhatIsML from "./view/WhatIsML/Index";

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
                      <Route path="/" element={<Navigate to="/overview" />} />
                      <Route path="/overview" element={<Overview />} />
                      <Route path="/what_is_the_ai" element={<WhatIsAI />} />
                      <Route path="/what_is_the_ml" element={<WhatIsML />} />
                      <Route path="/ml" element={<ML />} />
                  </Routes>
              </div>
          </main>
      </div>
  );
}

export default App;
