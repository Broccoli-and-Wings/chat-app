import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import styles from './Menu.scss';

const isActive = (history, path) =>
  history.location.pathname === path ? styles.active : '';

const Menu = ({ history }) => (
  <div className={styles.container}>
    <Link to="/" className={`${styles.link} ${isActive(history, '/')}`}>
      Home
    </Link>
    <Link
      to="/signup"
      className={`${styles.link} ${isActive(history, '/signup')}`}
    >
      Signup
    </Link>
  </div>
);

Menu.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Menu);
