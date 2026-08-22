import { Header, NewFooter } from "@/shared";
import React from "react";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <NewFooter type="newsletter" />
        </React.Fragment>
    )
}