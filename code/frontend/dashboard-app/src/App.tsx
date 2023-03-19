import React from 'react';
import './css/App.css';
import Home from "./view/Home/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import MenuSet from "./component/Menu/Index";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FeatureEngine from "./view/FeatureEngine/Index";
import ContentHeader from "./component/ContentHeader/Index";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

function App() {
  return (

      <div className="HomeContainer">
          <Grid container direction="row">
              <Grid className="menuListWrapper" xs={2} >
                  <Item className="menuListGridItem">
                      <MenuSet />
                  </Item>
              </Grid>
              <Grid xs={10} minWidth={600}  >
                  <ContentHeader />
                  <Item>
                      <Routes>
                          <Route path="/" element={<Navigate to="/home" />} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/feature" element={<FeatureEngine />} />
                      </Routes>
                  </Item>
              </Grid>
          </Grid>
      </div>
  );
}

export default App;
