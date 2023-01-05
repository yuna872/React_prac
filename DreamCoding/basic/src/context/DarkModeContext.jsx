import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    // 토글할 수 있는 함수
    const toggleDarkMode = () => setDarkMode(!darkMode);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
           {children} 
        </DarkModeContext.Provider>
    )
}