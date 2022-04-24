import React from "react";
import User from "./User";
import '../styles/userInfo.css'
import GoBackBtn from "../UI/GoBackBtn";

const UserInfo = ({ number, abonements }) => {
  const user = abonements.find(a => a.number === number)
  if (!user) {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="noUser">Нет такого абонемента</div>
        <GoBackBtn to='/' text='Вернуться назад' />
      </div>
    )
  }

  return (
    <User user={user} />
  )
}

export default UserInfo