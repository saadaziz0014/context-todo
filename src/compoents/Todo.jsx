import { useState } from "react";
import useTodos from "../context/Todo"
import TodoOne from "./TodoOne";

export default function Todo() {
    const { todos, removeTodo, updateTodo } = useTodos();
    return (
        <div className="flex flex-col gap-3 p-2">
            {todos.map((todo, index) => (
                <div key={index} className="">
                    <TodoOne index={index} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
                </div>
            ))}
        </div>
    )
}