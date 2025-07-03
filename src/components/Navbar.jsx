import React from "react";
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <nav style={{backgroundColor: '#0a0a23', padding: '1rem'}}>
            <nav style={{ backgroundColor: '#0a0a23', padding: '1rem', display: 'flex', gap: '1rem' }}>
  <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🎥 Movie Explorer</Link>
  <Link to="/watchlist" style={{ color: 'white', textDecoration: 'none' }}>📺 Watchlist</Link>
</nav>

        </nav>
    );
}

export default Navbar;