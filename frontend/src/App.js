import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import GovtIssues from './components/GovtIssues';
import Contact from './components/Contact'
import Nearme from './components/nearme'
import Search from './components/Search'
import HealthRecommendations from './components/HealthRecommendations';
import AdminPanel from './components/AdminPanel';
import FAQ from './components/FAQ';
import BMI from './components/BMI';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import MealPlanner from './components/MealPlanning';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweet />} />
          <Route path="/govt-issues" element={<GovtIssues />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="near-me" element={<Nearme />} />
          <Route path="Search" element={<Search />} />
          <Route path="HealthRecommendations" element={<HealthRecommendations />} />
          <Route path = "/admin-panel" element={<AdminPanel />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="BMI" element={<BMI />} />
          <Route path="recipe-of-the-day" element={<RecipeOfTheDay />} />
          <Route path="meal-planning" element={<MealPlanner />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
