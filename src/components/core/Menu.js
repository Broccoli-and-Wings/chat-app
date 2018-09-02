import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const navStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
};

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: 'tomato' };

  return { color: '#fff' };
};

const Menu = history => (
  <div style={navStyles}>
    <Link to="/" style={isActive(history, '/')}>
      Home
    </Link>
    <Link to="/signup" style={isActive(history, '/signup')}>
      Signup
    </Link>
  </div>
);

export default withRouter(Menu);
