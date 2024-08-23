import { useState } from "react"

export default function TodoInput(props) {
    // Destructure the props 
    const { handleAddTodos, todoValue, setTodoValue } = props

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTodos(todoValue)
            setTodoValue('')
        }
    }

    return (
        <header>
            <h1 className="headerIntro">Brandon's To Do </h1>
            <div className="input-button">
                {/* Input field for entering the todo item */}
                <input
                    value={todoValue}
                    onChange={(e) => {
                        // Update the state with the current input value
                        setTodoValue(e.target.value)
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter todo..."
                />

                {/* Button to add the todo item to the list */}
                <button onClick={() => {
                    // Add the current input value as a new todo
                    handleAddTodos(todoValue)
                    // Clear the input field after adding the todo
                    setTodoValue('')
                }}>Add</button>
            </div>
        </header>
    )
}
