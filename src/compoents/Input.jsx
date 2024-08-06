import { useState } from "react";
import useTodos from "../context/Todo"

export default function Input() {
    const { addTodo } = useTodos()
    const [todo, setTodo] = useState("");

    const handleAdd = () => {
        if (todo.length < 1) {
            window.alert("Task cannot be empty")
        }
        else {
            addTodo(todo)
            setTodo("")
        }
    }
    return (
        <div className="">
            <div className="flex gap-3">
                <input type="text" className="w-56 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Task" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={handleAdd}>Add</button>
                <button className="p-2 bg-red-500 text-white rounded-lg" onClick={() => setTodo("")}>Clear</button>
            </div>
        </div>
    )
}