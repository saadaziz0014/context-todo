import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext(
    {
        todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
        addTodo: () => { },
        removeTodo: () => { },
        updateTodo: () => { },
        removeAll: () => { }
    }
);

export const TodoProvider = TodoContext.Provider;


export default function useTodos() {
    return useContext(TodoContext)
}
