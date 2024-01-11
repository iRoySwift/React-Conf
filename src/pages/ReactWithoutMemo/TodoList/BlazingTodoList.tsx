"use client";
import React, { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import TodoList from "./TodoList";
import $Bus from "@/utils/$Bus";

interface Props {}
const BlazingTodoList: React.FC<Props> = () => {
    const counter = useRef(0);
    const [themeColor, setThemeColor] = useState("#0e7490");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [visibility, setVisibility] = useState("all");

    const countGetFileter = () => {
        counter.current += 1;
    };

    const closeColorPicker = (e: any) => {
        if (e.target.className == "react-colorful__interactive") return;
        setShowColorPicker(false);
    };
    useEffect(() => {
        document.addEventListener("click", closeColorPicker);
        $Bus.on("getFiltered", countGetFileter);
        return () => {
            document.removeEventListener("click", closeColorPicker);
            $Bus.off("getFiltered", countGetFileter);
        };
    });
    useEffect(() => {
        document.body.style.setProperty("--color-primary", themeColor);
        console.log("🚀 ~ useEffect ~ themeColor:", themeColor);
    }, [themeColor]);
    return (
        <div className="flex flex-row justify-center w-full gap-5">
            <div className="flex flex-col w-1/3 justify-center">
                <div className="flex items-center justify-center">
                    <code>getFiltered()</code> was called{" "}
                    <div
                        className={`w-5 h-5 text-white rounded flex items-center justify-center bg-red-300`}>
                        {counter.current}
                    </div>
                    times
                </div>
                <div className=" min-h-min bg-gradient-to-b from-cyan-600/80 via-cyan-600/90 to-cyan-600 rounded-2xl p-4">
                    <div className="flex flex-row justify-between items-center gap-2">
                        <div className="relative">
                            <div
                                className={`w-10 h-10 rounded-full cursor-pointer`}
                                style={{ backgroundColor: themeColor }}
                                onClick={() => setShowColorPicker(true)}></div>
                            <div className="absolute">
                                {showColorPicker && (
                                    <HexColorPicker
                                        color={themeColor}
                                        onChange={color => setThemeColor(color)}
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-evenly  bg-cyan-700/30 text-gray-200  rounded-full p-2  cursor-pointer">
                            <div
                                className={`${
                                    visibility == "all" ? "text-white" : ""
                                }`}
                                onClick={() => {
                                    setVisibility("all");
                                }}>
                                All
                            </div>
                            <div
                                className={`${
                                    visibility == "active" ? "text-white" : ""
                                }`}
                                onClick={() => {
                                    setVisibility("active");
                                }}>
                                Active
                            </div>
                            <div
                                className={`${
                                    visibility == "completed"
                                        ? "text-white"
                                        : ""
                                }`}
                                onClick={() => {
                                    setVisibility("completed");
                                }}>
                                Completed
                            </div>
                        </div>
                    </div>
                    <TodoList visibility={visibility} themeColor={themeColor} />
                </div>
            </div>
            <div className="w-50">
                <ul>
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                        item => (
                            <li
                                key={item}
                                className={`bg-primary-${item} py-3 px-2`}>
                                bg-primary-{item}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};
export default BlazingTodoList;
