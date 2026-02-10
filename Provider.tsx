"use client";
import React, { Suspense } from "react";
import { AppProvider } from "./context/AppContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}

export default Provider