import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import SearchBar from './components/searchbar';
import Tweet from './components/Tweet';
import GovtIssues from './components/GovtIssues';
import Contact from './components/Contact'
import Nearme from './components/nearme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="searchbar" element={<searchbar />} />

          <Route path="/tweets" element={<Tweet />} />
          <Route path="/govt-issues" element={<GovtIssues />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="near-me" element={<Nearme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
