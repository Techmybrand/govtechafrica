import { Header, Footer } from "@/shared";
import React from "react";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}