import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault(); //prevents default event of refreshing page on form submission

        if (value.trim() !== "") {
            addTodo(value)

            setValue("")
        } else {
            console.log("empty input")
        }


    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='What is the task today?' 
            onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}
