import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Todo from './Pages/todo-list/Todo'
import FormValidation from './Pages/formControl/FormValidation'
import DynamicStyling from './Pages/DynamicStyling/DynamicStyling'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<FormValidation />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/DynamicStyling' element={<DynamicStyling />} />
      </Routes>
      {/* <FormValidation /> */}
    </div>
    // <div>
    //   
    //   <FormValidation />
    //   <Todo />
    // </div>
  )
}

export default App