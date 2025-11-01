import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle(){
    const [theme, setTheme] = useState(()=> {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-fullborder border-gray-300 " >
            {theme === "dark" ? (
                <Sun className="w-5 h-5"  />
            ) : (
                <Moon className="w-8 h-8"  />
            )}
        </button>
    );
}

export default ThemeToggle;