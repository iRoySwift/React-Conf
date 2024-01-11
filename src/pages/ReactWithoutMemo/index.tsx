import React from "react";
import TodoList from "./TodoList/BlazingTodoList";
interface Props {}
const ReactWithoutMemo: React.FC<Props> = () => {
    return (
        <>
            <TodoList />
        </>
    );
};
export default ReactWithoutMemo;
