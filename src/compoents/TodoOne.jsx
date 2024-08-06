import { useEffect, useState } from "react"

export default function TodoOne({ todo, index, removeTodo, updateTodo }) {
    const [toogleTodo, setToogleTodo] = useState(false)
    const [update, setUpdate] = useState(todo)
    const handleUpdate = () => {
        if (toogleTodo) {
            updateTodo(index, update)
        }
        setToogleTodo(!toogleTodo)
    }
    useEffect(() => {

    }, [toogleTodo])
    return (
        <div className="flex justify-between bg-black p-2 rounded-lg w-96">
            {!toogleTodo ? <h1 className=" text-white font-bold">{todo}</h1> : <input type="text" className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={update} onChange={(e) => setUpdate(e.target.value)} />}
            <div className="flex gap-3">
                <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={handleUpdate}>{!toogleTodo ? "Edit" : "Done"}</button>
                <button className="p-2 bg-red-500 text-white rounded-lg" onClick={() => removeTodo(index)}>Delete</button>
            </div>
        </div>
    )
}