import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    // Destructure the todos array from props
    const { todos } = props

    return (
        <ul className='main'>
            {/* Map over the todos array and render a TodoCard component for each todo */}
            {todos.map((todo, todoIndex) => {
                return (
                    // Render TodoCard with props spread and additional key and index props
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        {/* Display the todo text inside a paragraph element */}
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
