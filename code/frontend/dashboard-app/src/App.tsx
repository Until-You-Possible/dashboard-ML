import React from 'react';
import "./css/App.css"
import Home from "./view/Home/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import MenuSet from "./component/Menu/Index";
import FeatureEngine from "./view/FeatureEngine/Index";
import ContentHeader from "./component/ContentHeader/Index";

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
                      <Route path="/home" element={<Home />} />
                      <Route path="/feature" element={<FeatureEngine />} />
                  </Routes>
              </div>
          </main>
      </div>
  );
}

export default App;
