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
        <div className="flex flex-row items-center h-14 bg-primary-500  rounded-full mt-3">
            <input
                value={name}
                className="w-full h-full outline-none bg-primary-500 p-2 rounded-full text-white"
                onInput={handleChange}
                onKeyDown={addTodo}
            />
            <div
                className="text-white  bg-primary-400 border rounded-full p-2 px-4 mr-2 cursor-pointer"
                onClick={addTodo}>
                Add{counter.current}
            </div>
        </div>
    );
};
export default AddTodo;
