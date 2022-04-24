import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FreezeContext } from '../FreezeContext'
import GoBackBtn from '../UI/GoBackBtn'

const User = ({ user }) => {
  const { data, setData } = useContext(FreezeContext)

  const checkEndDate = () => user.endDate > new Date() ? true : false
  const isFreezePossibility = user.freezeTime > 0 && checkEndDate()

  const onDeleteAbonement = () => {
    if (window.confirm('Подтвердите удаление')) {
      setData(data.filter(i => i.number !== user.number))
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <ul className="userInfo">
        <li>{`Имя: ${user.name}`}</li>
        <li>{`Номер карточки: ${user.number}`}</li>
        <li>{`Тариф: ${user.type} дней`}</li>
        <li>{`Дата покупки: ${user.buyDate.toLocaleDateString()}`}</li>
        {checkEndDate()
          ? <li>{`Действителен до: ${user.endDate.toLocaleDateString()}`}</li>
          : <li style={{ color: 'red', fontWeight: 900 }}>
            {`Был действителен до: ${user.endDate.toLocaleDateString()}, продлите абонемент`}</li>
        }
        {isFreezePossibility
          ?
          <li>
            <div>{`Количество доступных дней заморозки: ${user.freezeTime}`}</div>
            <div>
              <NavLink
                to={`/freezeUser`}
                className="freezeBtn"
                style={{ textDecoration: 'none' }}
              >
                Заморозить
              </NavLink>
            </div>
          </li>
          : <></>}

        <NavLink
          to={`/editUser`}
          className="freezeBtn"
          style={{ textDecoration: 'none' }}
        >
          Продлить
        </NavLink>
        <li>
          <button
            className="freezeBtn"
            onClick={onDeleteAbonement}
          >
            Удалить
          </button>
        </li>
        <li>
          <GoBackBtn to='/' text='Вернуться назад' />
        </li>
      </ul>
    </div >
  )
}

export default User