"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import UnmemoziedTodo from "./UnmemoziedTodo";
import AddTodo from "./AddTodo";
import $Bus from "@/utils/$Bus";

export type iTodo = {
    id: string;
    name: string;
    marked: boolean;
};

const initialTodo: iTodo[] = [
    {
        id: "1",
        name: "tes",
        marked: true,
    },
    {
        id: "2",
        name: "tes",
        marked: false,
    },
    {
        id: "3",
        name: "tes",
        marked: false,
    },
    {
        id: "4",
        name: "tes",
        marked: false,
    },
];

const getUpdated = (todos: iTodo[], id: string) => {
    return todos.map((item: iTodo) => {
        if (item.id == id) {
            item.marked = !item.marked;
        }
        return item;
    });
};

const getFiltered = (todos: iTodo[], visibility: string) => {
    $Bus.emit("getFiltered");
    return todos.filter((item: iTodo) => {
        if (visibility == "all") return true;
        if (visibility == "active") return !item.marked;
        if (visibility == "completed") return item.marked;
    });
};

// *✨ memo Todo
const Todo = React.memo(UnmemoziedTodo);

interface Props {
    visibility: string;
    themeColor: string;
}
const TodoList: React.FC<Props> = ({ visibility, themeColor }) => {
    const [todos, setTodos] = useState(initialTodo);

    // !🤯 Deprecated
    // let hasVisibilityChanged, hasThemeColorChanged, hasTodosChanged, memoCache;
    // !🤯 useCallback Todo
    // const updateTodo =
    //     memoCache[0] ||
    //     (memoCache[0] = (id: string) => {
    //         setTodos(preTodos => getUpdated(preTodos, id));
    //     });
    // !🤯 useMemo Todo
    // let filtered;
    // if (hasVisibilityChanged || hasTodosChanged) {
    //     filtered = memoCache[1] = getFiltered(todos, visibility);
    // } else {
    //     filtered = memoCache[1];
    // }

    // *✨ useCallback Todo
    const updateTodo = useCallback((id: string) => {
        setTodos(preTodos => getUpdated(preTodos, id));
    }, []);

    // *✨ useMemo Todo
    const filtered = useMemo(
        () => getFiltered(todos, visibility),
        [todos, visibility]
    );
    // * useMemo
    return (
        <div>
            <ul>
                {filtered.map((todo: iTodo) => (
                    <Todo key={todo.id} {...todo} onChange={updateTodo} />
                ))}
            </ul>
            <AddTodo setTodos={setTodos} />
        </div>
    );
};
export default TodoList;
