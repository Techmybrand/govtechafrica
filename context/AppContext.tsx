"use client";
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext<ContextProps | null>(null);

export interface ContextProps {
	theme: "light" | "dark";
	setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <AppContext.Provider value={{
        theme,
        setTheme
    }}>
        {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };