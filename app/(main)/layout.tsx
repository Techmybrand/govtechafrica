import { Header, NewFooter } from "@/shared";
import React from "react";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <Header type="new" />
                {children}
            <NewFooter />
        </React.Fragment>
    )
}