import react, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }
    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }
    return (
        <div className='container'>
            <h1>Todo -List</h1>
            <input type="text"
                className='flex mb-4 form-control w-50'
                placeholder='Add a new task...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btn btn-primary w-50' onClick={addTodo}>Add</button>
            <div className="">
                {todos.length === 0 ? (<p>NO Tasks Yet.Add one above!</p>) : (todos.map((todo, i) => (
                    <div key={i} className=' d-flex justify-content-between align-items-center mt-3'>
                        <span>{todo}</span>
                        <button
                            onClick={() => deleteTodo(i)} className='btn btn-danger text-white px-3 ms-5 position-relative end-50 mt-3'>Delete</button>
                    </div>
                )))
                }
            </div>
        </div>
    )
}

export default Todo