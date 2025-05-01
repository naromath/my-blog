import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleDarkMode} 
      aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;