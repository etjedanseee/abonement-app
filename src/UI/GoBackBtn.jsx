import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './gobackBtn.module.css'
const GoBackBtn = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={styles.myBtn}
    >
      {text}
    </NavLink>
  )
}

export default GoBackBtn