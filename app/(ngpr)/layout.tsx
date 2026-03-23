import { NpgrHeader } from "@/shared";
import React from "react";

export default function NGPRLayout({ children }: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <NpgrHeader />
            {children}
            {/* <Footer /> */}
        </React.Fragment>
    )
}