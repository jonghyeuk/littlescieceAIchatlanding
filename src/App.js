import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 메인 랜딩 페이지 */}
          <Route path="/" element={<LandingPage />} />
          
          {/* 이용권 구매 페이지 */}
          <Route path="/pricing" element={<PricingPage />} />
          
          {/* 404 페이지 - 잘못된 경로 접근 시 홈으로 리다이렉트 */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
