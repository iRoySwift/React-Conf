"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
    id: string;
    marked: boolean;
    name: string;
    onChange: (id: string) => void;
}
const UnmemoziedTodo: React.FC<Props> = ({ id, marked, name, onChange }) => {
    const counter = useRef(0);
    useEffect(() => {
        counter.current += 1;
    });
    return (
        <div
            className="mt-3 flex cursor-pointer flex-row  items-center  justify-between rounded-full bg-cyan-700/30 p-4"
            onClick={() => onChange(id)}>
            <div className="flex flex-row items-center">
                <input
                    checked={marked}
                    readOnly
                    type="checkbox"
                    className="h-4 w-4 appearance-none rounded-full outline outline-offset-2 outline-white checked:bg-white"
                />
                <span
                    className={`ml-4 text-white ${
                        marked
                            ? "font-light italic text-gray-200 line-through"
                            : ""
                    }`}>
                    {name}
                </span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-300">
                {counter.current}
            </div>
        </div>
    );
};
export default UnmemoziedTodo;
