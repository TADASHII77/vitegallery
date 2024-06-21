import React, { useState } from 'react';
import userlogo from './assets/userlogo.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={userlogo} alt="User Logo" className="user-logo" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            id="searchInput"
            placeholder="Enter your prompt..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
