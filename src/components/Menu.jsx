import React from 'react'
import GoBackBtn from '../UI/GoBackBtn'
import s from '../styles/menu.module.css'

const Menu = () => {
  return (
    <nav className={s.nav}>
      <GoBackBtn to='/search' text='Поиск абонемента' />
      <GoBackBtn to='/newUser' text='Новый абонемент' />
      <GoBackBtn to='/allUsers' text='Все абонементы' />
    </nav>
  )
}

export default Menu