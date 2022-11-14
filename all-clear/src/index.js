import React from 'react';
import './index.css';
import { render } from "react-dom";


// import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import Page3 from "./routes/page3";
import StandBy from "./routes/standBy";
import DetailPlan from "./routes/datailPlan";
import GamePage from "./routes/gamePage";
import PageSetting from './routes/pageSetting';


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route element={<PageSetting/>}>
        <Route path="/" element={<App />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="standBy" element={<StandBy />} style={{display: 'inline-block'}}/>
        <Route path="datailPlan/:id/:professor" element={<DetailPlan id={1}/>} />
        <Route path="gamePage" element={<GamePage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement

);
