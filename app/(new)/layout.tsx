import { Header, NewFooter } from "@/shared";
import React from "react";

export default function NewLayout({ children }: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <Header type="new" />
                {children}
            {/* <Footer type="new" /> */}
            <NewFooter />
        </React.Fragment>
    )
}