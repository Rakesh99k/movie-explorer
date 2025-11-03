import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav
            style={{
                background: 'linear-gradient(90deg, #000 60%, #00f6ff 100%)',
                padding: '1rem 2rem',
                boxShadow: '0 0 24px #00f6ff44',
                borderBottom: '2px solid #00f6ff',
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
                        color: '#00f6ff',
                        textDecoration: 'none',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textShadow: '0 0 12px #00f6ff',
                        letterSpacing: '2px',
                        transition: 'color 0.2s',
                    }}
                >
                    🎥 Movie Explorer
                </Link>
                <Link
                    to="/watchlist"
                    style={{
                        color: '#00f6ff',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '500',
                        textShadow: '0 0 8px #00f6ff',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '8px',
                        border: '2px solid #00f6ff',
                        background: 'rgba(0,0,0,0.7)',
                        boxShadow: '0 0 12px #00f6ff44',
                        transition: 'background 0.2s, color 0.2s',
                    }}
                    onMouseOver={e => {
                        e.target.style.background = '#00f6ff';
                        e.target.style.color = '#000';
                    }}
                    onMouseOut={e => {
                        e.target.style.background = 'rgba(0,0,0,0.7)';
                        e.target.style.color = '#00f6ff';
                    }}
                >
                    📺 Watchlist
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;