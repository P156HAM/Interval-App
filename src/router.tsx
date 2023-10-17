import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoadingScreen from './view/loadingScreen/loadingScreen';
import Home from './view/home/home'
import Time from './view/time/time'
import TimesUpView from './view/timesUp/timesUp'
import BreakView from './view/break/break';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="Interval-App/" element={<LoadingScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/time" element={<Time />} />
      <Route path="/timesup" element={<TimesUpView />} />
      <Route path="/break" element={<BreakView />} />
    </Routes>
  </BrowserRouter>
);

export default Router;