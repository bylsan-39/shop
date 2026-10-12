import lightmood from "../assets/light1.jpg"
import nightmood from "../assets/dark1.jpg"
import React, { useState, useEffect } from "react";
function DarkMode() {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("Theme") : "light"
    );
    const element = document.documentElement;

    React.useEffect(() => {
        if (theme == "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    return (
        <div className="relative">
            <img
                onClick={() => {
                    setTheme(theme == "light" ? "dark" : "light");
                }}
                className={` w-16 transition-all duration-300 rounded-full
            cursor-pointer absolute right-0 z-10  ${theme == "dark" ? "opacity-0" : " opacity-100"} `}
                src={lightmood} alt="" />
            <img
                onClick={() => {
                    setTheme(theme == "dark" ? "light" : "dark");
                }}
                className="w-16 transition-all
                duration-300 rounded-full cursor-pointer "
                src={nightmood} alt="" />
        </div>
    );
}
export default DarkMode