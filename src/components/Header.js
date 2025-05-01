import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <h1 className="site-title">
            <Link to="/">My React Blog</Link>
          </h1>
          <div className="header-actions">
            <SearchBar />
            <ThemeToggle />
          </div>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tags">Tags</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;