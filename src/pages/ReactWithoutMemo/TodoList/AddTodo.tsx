"use client";
import React, {
    ChangeEvent,
    KeyboardEvent,
    MouseEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { nanoid } from "nanoid";
import { iTodo } from "./TodoList";

interface Props {
    setTodos: React.Dispatch<React.SetStateAction<iTodo[]>>;
}
const AddTodo: React.FC<Props> = ({ setTodos }) => {
    const [name, setName] = useState("");
    const counter = useRef(0);
    useEffect(() => {
        counter.current += 1;
    });
    const addTodo = (e: any) => {
        if (!(e.keyCode == 13 || e.type == "click") || !name.trim()) return;
        setTodos((todos: iTodo[]) => [
            ...todos,
            { name, id: nanoid(), marked: false },
        ]);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div className="mt-3 flex h-14 flex-row items-center  rounded-full bg-primary-500">
            <input
                value={name}
                className="h-full w-full rounded-full bg-primary-500 p-2 text-white outline-none"
                onInput={handleChange}
                onKeyDown={addTodo}
            />
            <div
                className="mr-2  cursor-pointer rounded-full border bg-primary-400 p-2 px-4 text-white"
                onClick={addTodo}>
                Add{counter.current}
            </div>
        </div>
    );
};
export default AddTodo;
