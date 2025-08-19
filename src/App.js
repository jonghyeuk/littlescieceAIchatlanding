import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage setCurrentPage={setCurrentPage} />
      ) : (
        <PricingPage onBackToLanding={() => setCurrentPage('landing')} />
      )}
    </div>
  );
};

export default App;
