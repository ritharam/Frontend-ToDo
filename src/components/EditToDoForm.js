import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value,setValue] = useState(task.task)

    const handleSubmit = event => {
        event.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type='text'
        className='todo-edit'
        value={value}
        placeholder='Update your todo'
        onChange={(event) => setValue(event.target.value)}
        />
        <button type='submit' className='btn-upd'>Update</button>
    </form>
  )
}

export default EditTodoForm