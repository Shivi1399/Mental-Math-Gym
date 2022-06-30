import React, { useState } from 'react'
import { WorsheetContext } from './context/index'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Addition from './pages/addition'
import Subtraction from './pages/subtraction'
import Multiplication from './pages/multiplication'
import Division from './pages/division'
import Percentage from './pages/percentage'
import './App.css'

const App = () => {
  const [rows, setRows] = useState(10)
  const [cols, setCols] = useState(10)
  const [diffLvl, setDiffLvl] = useState(1)
  const Worsheet = {
      x: rows,
      y: cols,
      diffLvl: diffLvl
  }
  const changeRows = val => {
    if(val <= 0) val = 1
    setRows(val)
  }

  const changeCols = val => {
    if(val <= 0) val = 1
    setCols(val)
  }

  const changeDiffLvl = val => {
    if(val <= 0) val = 1
    setDiffLvl(val)
  }

  return (
    <div className='App'>
      <WorsheetContext.Provider value={Worsheet}>
        <Header
          rows={rows}
          cols={cols}
          diffLvl={diffLvl}
          changeRows = {changeRows}
          changeCols = {changeCols}
          changeDiffLvl = {changeDiffLvl}
        />
        <Routes>
          <Route path='addition' element={<Addition/>}></Route>
          <Route path='subtraction' element={<Subtraction/>}></Route>
          <Route path='multiplication' element={<Multiplication/>}></Route>
          <Route path='division' element={<Division/>}></Route>
          <Route path='percentage' element={<Percentage/>}></Route>
        </Routes>
      </WorsheetContext.Provider>
    </div>
  )
}

export default App