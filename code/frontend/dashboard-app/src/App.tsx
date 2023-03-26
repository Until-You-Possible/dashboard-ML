import React from 'react';
import "./css/App.css"
import Overview from "./view/Overview/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import MenuSet from "./component/Menu/Index";
import FeatureEngine from "./view/FeatureEngine/Index";
import ContentHeader from "./component/ContentHeader/Index";
import ML from "./view/ML/Index";

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
                      <Route path="/" element={<Navigate to="/home" />} />
                      <Route path="/overview" element={<Overview />} />
                      <Route path="/ml" element={<ML />} />
                  </Routes>
              </div>
          </main>
      </div>
  );
}

export default App;
