import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Billing from './components/Billing';
import Mail from './components/Mail';
import News from './components/News';
import Posts from './components/Posts';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/news" element={<News />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
