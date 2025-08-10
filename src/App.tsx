import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ResultPage from './pages/ResultPage';
import SurveyPage from './pages/SurveyPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
