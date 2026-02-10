"use client";
// import Lenis from 'lenis';
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext<ContextProps | null>(null);

export interface ContextProps {
	theme: "light" | "dark";
	setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     smoothWheel: true,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
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