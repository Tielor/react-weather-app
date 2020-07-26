import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>Weather App</h1>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  marginBottom: '35px',
  padding: '10px',
  background: '#333',
  color: '#fff',
}

export default Header;
