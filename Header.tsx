import React from 'react';

const Header = () => {
  return (
    <header className="p-4 border-b">
      <nav>
        <a href="/">
          <img src="/logo.svg" alt="Shipsoft Logo" className="h-10 w-10" />
        </a>
      </nav>
    </header>
  );
};

export default Header;