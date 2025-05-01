import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PostPage from './pages/PostPage';
import Admin from './pages/Admin';
import TagPage from './pages/TagPage';
import TagsPage from './pages/TagsPage';
import SearchPage from './pages/SearchPage';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/tag/:tag" element={<TagPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;