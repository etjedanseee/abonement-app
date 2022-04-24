import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FreezeContext } from "../FreezeContext";
import GoBackBtn from "../UI/GoBackBtn";
import '../styles/search.css'

const SearchAbonement = () => {
  const [searchNumber, setSearchNumber] = useState('')
  const { setCurrentNumber } = useContext(FreezeContext)

  const onSearchClick = () => {
    setCurrentNumber(+searchNumber)
    setSearchNumber('')
  }
  return (
    <form className="searchForm">
      <input
        className="searchInput"
        placeholder='Введите номер карточки'
        onChange={ev => setSearchNumber(ev.target.value)}
        value={searchNumber}
      />
      <NavLink
        to={`/users/${searchNumber}`}
        className="searchBtn"
        onClick={onSearchClick}
      >
        Поиск
      </NavLink>
      <div className="goback">
        <GoBackBtn to='/' text='На главную' />
      </div>
    </form>
  )
}

export default SearchAbonement