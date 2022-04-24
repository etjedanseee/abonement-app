import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FreezeContext } from '../FreezeContext'
import styles from '../styles/newUser.module.css'
import { prolongUser } from '../functions/prolongUser'

const EditUser = () => {
  const [type, setType] = useState('')
  const { data, setData, currentNumber } = useContext(FreezeContext)

  const currentUser = data.find(a => a.number == currentNumber)

  const updateUser = () => {
    const editedUser = prolongUser({ type: +type, currentUser })

    const newData = [...data].map(item => {
      if (item.id === editedUser.id) {
        return editedUser
      }
      else return item
    })
    setData([...newData])
  }


  return (
    <form>
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
          to={`/users/${currentNumber}`}
          onClick={updateUser}
        >
          Продлить абонемент
        </NavLink>
      </div>
    </form>
  )
}

export default EditUser