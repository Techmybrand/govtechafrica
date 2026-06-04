import { Header, Footer } from "@/shared";
import React from "react";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <Header type="new" />
                {children}
            <Footer type="new" />
        </React.Fragment>
    )
}