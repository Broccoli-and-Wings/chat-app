import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import styles from './Menu.scss'

const isActive = (history, path) =>
  history.location.pathname === path
    ? ''
    : styles.active

const Menu = withRouter(({ history }) => (
  <div className={ styles.container }>
    <Link to="/" className={`${styles.link} ${isActive(history, '/')}`}>
      Home
    </Link>
    <Link to="/signup" className={`${styles.link} ${isActive(history, '/signup')}`}>
      Signup
    </Link>
  </div>
)

export default withRouter(Menu)
