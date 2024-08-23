import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // State to store the list of todos
  const [todos, setTodos] = useState([])
  // State to store the current value of the todo input
  const [todoValue, setTodoValue] = useState('')

  // Function to persist the todo list in local storage
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    // Save the updated list in local storage
    persistData(newTodoList)
    // Update the todos state with the new list
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    // Filter out the todo to be deleted by its index
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    // Save the updated list in local storage
    persistData(newTodoList)
    // Update the todos state with the new list
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    // Get the value of the todo to be edited
    const valueToBeEdited = todos[index]
    // Set the value in the input field to the todo being edited
    setTodoValue(valueToBeEdited)
    // Delete the todo being edited from the list
    handleDeleteTodo(index)
  }

  // useEffect hook to load todos from local storage when the component mounts
  useEffect(() => {
    if (!localStorage) {
      return
    }

    // Get the todos from local storage
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    // Parse the todos and update the state
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  // Render the TodoInput and TodoList components, passing the necessary props
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
