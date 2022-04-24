import React from "react";
import { BrowserRouter } from "react-router-dom";
import Freeze from "./components/Freeze";
import { types } from './types'


//initial abonements
const abonements = [
  { name: 'Oleg Nechiporenko', id: 1, type: types.year, buyDate: new Date(), freezeTime: 60 },
  { name: 'Sanya Seev', id: 2, type: types.one, buyDate: new Date(), freezeTime: 60 },
  { name: 'Victor Green', id: 3, type: types.month, buyDate: new Date(), freezeTime: 60 },
  { name: 'Selena Gomes', id: 4, type: types.month, buyDate: new Date(), freezeTime: 60 },
  { name: 'Danil Vasiliev', id: 5, type: types.threeMonths, buyDate: new Date(), freezeTime: 60 },
  { name: 'Osca Ivanova', id: 6, type: types.year, buyDate: new Date(), freezeTime: 60 },
  { name: 'Lesya Belova', id: 7, type: types.month, buyDate: new Date(), freezeTime: 60 },
  { name: 'Victoria Secret', id: 8, type: types.one, buyDate: new Date(), freezeTime: 60 },
]

//initial set date 
abonements[2].buyDate.setMonth(1)
abonements[2].buyDate.setDate(3)
abonements[3].buyDate.setMonth(1)
abonements[3].buyDate.setDate(4)
abonements[0].buyDate.setFullYear(2018)

function App() {
  return (
    <BrowserRouter>
      <Freeze abonements={abonements} />
    </BrowserRouter>
  );
}

export default App;
