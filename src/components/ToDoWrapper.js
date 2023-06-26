import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
uuidv4();

const [toDo, setToDo] = useState([])
const [text, setText] = useState("")
const [isUpdating, setIsUpdating] = useState(false)
const [toDoId, setToDoId] = useState("")

useEffect(() => {
  getAllToDo(setToDo)
}, [])

const updateMode = (_id, text) => {
  setIsUpdating(true)
  setText(text)
  setToDoId(_id)
}

const TodoWrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}])
        console.log(todos)
    } 

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
            todo, completed: !todo.completed}: todo))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !==id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
          todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task,id)=> {
      setTodos(todos.map(todo => todo.id === id ? {...
      todo,task, isEditing: !todo.isEditing}: todo))
    }

  return (
    <div className='TodoBox'>
        <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
        //   <Todo task={todo} key={index}
        //   toggleComplete={toggleComplete}
        //   deleteTodo={deleteTodo}
        //   editTodo={editTodo}/>
        {todo.map((item) => <ToDo 
            key={item._id} 
            text={item.text}
            updateMode = {() => updateMode(item._id, item.text)}
            deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}
        )
        ))}
    </div>
  )
}

export default TodoWrapper