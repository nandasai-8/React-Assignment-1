import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import TodoList from './components/Todo-List/TodoList'
import RandomNumber from './components/RandomNumber/RandomNumber'
import ProductCard from './components/ProductCard/ProductCard'
import UserList from './components/UserList/UserList'
import Theory from './components/Theory/Theory'
import ParentComponent from './components/FormComponent/ParentComponent'


function App() {
  return (

    <>
      <Navbar />
      {/* <TodoList /> */}
      {/* <RandomNumber />
      
      <UserList /> */}
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/parentcomponent' element={<ParentComponent />} />
        <Route path='/productcard' element={<ProductCard name="John Doe" age={28} location="New York" />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/randomnumber' element={<RandomNumber />} />
      </Routes>
    </>

  )

}


export default App
