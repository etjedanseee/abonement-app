import React, { useContext, useState } from 'react'
import GoBackBtn from '../UI/GoBackBtn'
import styles from '../styles/newUser.module.css'
import calculateEndDateAndFreezeDays from '../functions/calculateEndDateAndFreezeDays'
import { NavLink } from 'react-router-dom'
import { FreezeContext } from '../FreezeContext'

const NewUser = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const { data, setData, setCurrentNumber } = useContext(FreezeContext)

  //get next user number
  const number = data[data.length - 1].number + 1

  const createNewUser = (e) => {
    if (!name || !type) e.preventDefault()
    const tempUser = {
      number,
      id: Date.now(),
      name,
      type: +type,
      buyDate: new Date()
    }
    const newUser = calculateEndDateAndFreezeDays([tempUser])[0]
    setData([...data, newUser])
    setCurrentNumber(number)
  }

  return (
    <div className={styles.container}>
      <GoBackBtn to='/' text='Вернуться назад' />
      <form>
        <div className={styles.name}>
          <input
            type='text'
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder='Введите имя и фамилию'
            required
          />
        </div>
        <div className={styles.type}>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            required
          >
            <option value='' disabled hidden>Выберете длительность абонемента</option>
            <option value="1">1 день</option>
            <option value="30">1 месяц</option>
            <option value="90">3 месяца</option>
            <option value="365">1 год</option>
          </select>
        </div>
        <div className={styles.submit}>
          <NavLink
            to={`/users/${number}`}
            onClick={createNewUser}
          >
            Создать абонемент
          </NavLink>
        </div>
      </form>
    </div>
  )
}

export default NewUser