import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(value)
        setValue("")
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type='text'
        className='todo-input'
        value={value}
        placeholder='Enter your new To Do'
        onChange={(event) => setValue(event.target.value)}
        />
        <button type='submit' className='btn-add'>+</button>
    </form>
  )
}

export default TodoForm