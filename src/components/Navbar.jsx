import React from "react";
import { Link } from 'react-router-dom';


function Navbar({ theme, toggleTheme }) {
    return (
        <nav
            style={{
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, #000 60%, #00f6ff 100%)'
                  : 'linear-gradient(90deg, #fff 60%, #a259ff 100%)',
                padding: '1rem 2rem',
                boxShadow: theme === 'dark'
                  ? '0 0 24px #00f6ff44'
                  : '0 0 24px #a259ff44',
                borderBottom: theme === 'dark'
                  ? '2px solid #00f6ff'
                  : '2px solid #a259ff',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem',
                }}
            >
                <Link
                    to="/"
                    style={{
                        color: theme === 'dark' ? '#00f6ff' : '#a259ff',
                        textDecoration: 'none',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textShadow: theme === 'dark' ? '0 0 12px #00f6ff' : '0 0 12px #a259ff',
                        letterSpacing: '2px',
                        transition: 'color 0.2s',
                    }}
                >
                    🎥 Movie Explorer
                </Link>
                <Link
                    to="/watchlist"
                    style={{
                        color: theme === 'dark' ? '#00f6ff' : '#a259ff',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '500',
                        textShadow: theme === 'dark' ? '0 0 8px #00f6ff' : '0 0 8px #a259ff',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '8px',
                        border: theme === 'dark' ? '2px solid #00f6ff' : '2px solid #a259ff',
                        background: theme === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)',
                        boxShadow: theme === 'dark' ? '0 0 12px #00f6ff44' : '0 0 12px #a259ff44',
                        transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseOver={e => {
                        e.target.style.background = theme === 'dark' ? '#00f6ff' : '#a259ff';
                        e.target.style.color = theme === 'dark' ? '#000' : '#fff';
                    }}
                    onMouseOut={e => {
                        e.target.style.background = theme === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)';
                        e.target.style.color = theme === 'dark' ? '#00f6ff' : '#a259ff';
                    }}
                >
                    📺 Watchlist
                </Link>
                <button
                  onClick={toggleTheme}
                  style={{
                    marginLeft: '2em',
                    padding: '0.5em 1.2em',
                    borderRadius: '8px',
                    border: theme === 'dark' ? '2px solid #00f6ff' : '2px solid #a259ff',
                    background: theme === 'dark' ? '#000' : '#fff',
                    color: theme === 'dark' ? '#00f6ff' : '#a259ff',
                    fontWeight: 'bold',
                    fontFamily: 'Orbitron, Avenir, Helvetica, Arial, sans-serif',
                    boxShadow: theme === 'dark' ? '0 0 12px #00f6ff44' : '0 0 12px #a259ff44',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? '🌙 Neon' : '☀️ Purple'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;