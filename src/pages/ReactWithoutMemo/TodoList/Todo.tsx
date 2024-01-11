"use client";

import React, { useEffect, useRef, useState } from "react";
import { iTodo } from "./TodoList";

interface Props {
    todo: iTodo;
    onChange: (id: string) => void;
}
const Todo: React.FC<Props> = ({ todo, onChange }) => {
    console.log("🚀 ~ todo:", todo);
    const counter = useRef(0);
    useEffect(() => {
        counter.current += 1;
    });
    return (
        <div
            className="flex flex-row items-center justify-between  bg-cyan-700/30  rounded-full p-4 mt-3 cursor-pointer"
            onClick={() => onChange(todo.id)}>
            <div className="flex flex-row items-center">
                <input
                    checked={todo.marked}
                    readOnly
                    type="checkbox"
                    className="w-4 h-4 appearance-none outline outline-offset-2 outline-white rounded-full checked:bg-white"
                />
                <span
                    className={`text-white ml-4 ${
                        todo.marked
                            ? "line-through italic font-light text-gray-200"
                            : ""
                    }`}>
                    {todo.name}
                </span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
                {counter.current}
            </div>
        </div>
    );
};
export default React.memo(Todo);
