import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FreezeContext } from '../FreezeContext'
import styles from '../styles/allUsers.module.css'
import '../styles/search.css'

const AllUsers = () => {
  const [searchText, setSearchText] = useState('')
  const [isFilterPerformance, setIsFilterPerformance] = useState(false)

  const { data, setData, setCurrentNumber } = useContext(FreezeContext)

  const getFilteredUsers = () => {
    return (
      isFilterPerformance
        ? filterByNameAndPerfomance()
        : filterByName()
    )
  }

  const filterByName = () => data.filter(a => a.name.toLowerCase().includes(searchText.toLowerCase()))
  const filterByNameAndPerfomance = () => filterByName().filter(user => user.isPerformance <= 0)
  const getOldAbonements = () => data.filter(user => user.isPerformance > -365)

  const filteredUsers = searchText || isFilterPerformance ? getFilteredUsers() : [...data]
  const deleteOldUsers = () => setData(getOldAbonements())
  const onLinkClick = num => setCurrentNumber(num)


  return (
    <ul className={styles.list} >
      <NavLink
        to={`/`}
        className={`gobackBtn ${styles.goBack}`}
      >
        На главную
      </NavLink>
      <div className={styles.container}>
        <input
          type="text"
          className={`searchInput ${styles.searchInput}`}
          placeholder='Поиск по имени...'
          value={searchText}
          onChange={(ev) => setSearchText(ev.target.value)}
        />
        <div className={styles.countFilteredUsers}>
          {
            searchText.length || isFilterPerformance
              ? isFilterPerformance
                ? `Найдено не годных абонементов: ${filteredUsers.length}`
                : `Найдено совпадений: ${filteredUsers.length}`
              : ''
          }
        </div>
      </div>
      <div className={styles.showPerfomance}>
        <input
          type='checkbox'
          checked={isFilterPerformance}
          onChange={() => setIsFilterPerformance(prev => !prev)}
        />
        <span>Показать не годные абонементы</span>
      </div>

      <div
        className={styles.deleteOldUsers}
        onClick={deleteOldUsers}
      >
        Удалить старые абонементы
      </div>
      {filteredUsers.map(a => (
        <NavLink
          to={`/users/${a.number}`}
          key={a.id}
          className={styles.link}
          onClick={() => onLinkClick(a.number)}
        >
          {JSON.stringify(a, null, 2)}
        </NavLink>
      ))}
    </ul>
  )
}

export default AllUsers