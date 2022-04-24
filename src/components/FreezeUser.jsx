import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FreezeContext } from '../FreezeContext'
import { getNewDateAfterFreeze } from '../functions/getNewDateAfterFreeze'
import styles from '../styles/newUser.module.css'


const FreezeUser = () => {
  const [numOfFreezeDays, setNumOfFreezeDays] = useState('')
  const { data, setData, currentNumber } = useContext(FreezeContext)

  const user = data.find(a => a.number == currentNumber)

  const checkEndDate = () => user.endDate > new Date() ? true : false
  const isFreezePossibility = user.freezeTime > 0 && checkEndDate()

  const onFreeze = (e) => {
    if (+numOfFreezeDays > user.freezeTime) {
      e.preventDefault()
      setNumOfFreezeDays('')
    }
    let maxFreezeDays = user.endDate.getTime() - new Date().getTime(); //diff in ms
    maxFreezeDays = Math.ceil(maxFreezeDays / 1000 / 86400); //diff in days

    const newDate = getNewDateAfterFreeze({
      user, isFreezePossibility, maxFreezeDays,
      numOfFreezeDays: +numOfFreezeDays
    })

    if (!newDate) return false
    const updatedUser = {
      ...user,
      endDate: newDate,
      freezeTime: +user.freezeTime - +numOfFreezeDays
    }
    const updatedData = [...data].map(item => {
      return (
        item.id === updatedUser.id ? updatedUser : item
      )
    })
    setData([...updatedData])
  }

  return (
    <form>
      <div className={styles.name}>
        <input
          type="text"
          value={numOfFreezeDays}
          onChange={e => setNumOfFreezeDays(e.target.value)}
          placeholder='Количество дней заморозки'
        />
      </div>
      <div className={styles.submit}>
        <NavLink
          to={`/users/${currentNumber}`}
          onClick={e => onFreeze(e)}
        >
          Заморозить
        </NavLink>
      </div>
    </form>
  )
}

export default FreezeUser