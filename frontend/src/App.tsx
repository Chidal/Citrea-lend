import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RewardPage from './pages/RewardPage';
import AccountingPage from './pages/AccountingPage';
import SavingsPage from './pages/SavingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-dark text-accent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reward" element={<RewardPage />} />
          <Route path="/accounting" element={<AccountingPage />} />
          <Route path="/savings" element={<SavingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;