import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FreezeContext } from "../FreezeContext";
import AllUsers from "./AllUsers";
import calculateEndDateAndFreezeDays from "../functions/calculateEndDateAndFreezeDays";
import EditUser from "./EditUser";
import FreezeUser from "./FreezeUser";
import Menu from "./Menu";
import NewUser from "./NewUser";
import SearchAbonement from "./SearchAbonement";
import UserInfo from "./UserInfo";

const Freeze = ({ abonements }) => {
  const [data, setData] = useState(() => calculateEndDateAndFreezeDays(abonements))
  const [currentNumber, setCurrentNumber] = useState(0)
  const getSearchText = text => setCurrentNumber(+text)


  return (
    <FreezeContext.Provider value={
      {
        data, setData, currentNumber, setCurrentNumber
      }
    }>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/search' element={
          <SearchAbonement getSearchText={getSearchText} />}
        />
        <Route exact path={`/users/${currentNumber}`} element={
          <UserInfo
            number={currentNumber}
            abonements={data}
          />}
        />
        <Route exact path='/newUser' element={
          <NewUser />
        } />
        <Route exact path='/editUser' element={
          <EditUser currentNumber={currentNumber} />
        } />
        <Route exact path='/freezeUser' element={
          <FreezeUser />
        } />
        <Route exact path='/allUsers' element={
          <AllUsers />} />
      </Routes>
    </FreezeContext.Provider>
  )
}
export default Freeze