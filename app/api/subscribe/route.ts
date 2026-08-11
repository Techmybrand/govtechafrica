// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//     try {
//         const { fullName, email } = await req.json();
//         if (!email || !fullName) {
//             return NextResponse.json({ error: "Name and email are required." },{ status: 400 });
//         }
//         const zohoPayload = new URLSearchParams({
//             FIRSTNAME: fullName,
//             CONTACT_EMAIL: email,
//             submitType: "optinCustomView",
//             emailReportId: "",
//             formType: "QuickForm",
//             zx: "1371db337",
//             zcvers: "3.0",
//             oldListIds: "",
//             mode: "OptinCreateView",
//             zcld: "116e7f964d9c49101",
//             zctd: "116e7f964d9c2db89",
//             zc_trackCode: "ZCFORMVIEW",
//             zc_formIx: "3zb2e5d1ce437642a7046048bcefc78a2a259a55758a0507323f27eb5860f4e62f",
//             scriptless: "yes",
//         });

//         const zohoRes = await fetch("https://dcqorm-cmpzourl.maillist-manage.com/weboptin.zc",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//                 body: zohoPayload.toString(),
//             }
//         );

//         if (!zohoRes.ok) {
//             return NextResponse.json({ error: "Failed to subscribe to newsletter." }, { status: 502 });
//         }

//         const responseText = await zohoRes.text();
//         if (responseText.includes("already a part of our organization") || responseText.includes("already signed up")) {
//             return NextResponse.json({ error: "This email address has already been subscribed." }, { status: 409 });
//         }

//         return NextResponse.json({ message: "Successfully subscribed!" },{ status: 200 });
//     } catch (error) {
//         console.error("Zoho Subscription Error:", error);
//         return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 });
//     }
// }

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email } = await req.json();
        if (!email || !firstName || !lastName) {
            return NextResponse.json({ error: "First name, last name, and email are required." },{ status: 400 });
        }
        const zohoPayload = new URLSearchParams({
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            CONTACT_EMAIL: email,
            submitType: "optinCustomView",
            lD: "116e7f964d9c49101",
            emailReportId: "",
            zx: "1371db337",
            zcvers: "3.0",
            oldListIds: "",
            mode: "OptinCreateView",
            zcld: "116e7f964d9c49101",
            zctd: "116e7f964d9c2db89",
            document_domain: "",
            zc_Url: "dcqorm-cmpzourl.maillist-manage.com",
            new_optin_response_in: "0",
            duplicate_optin_response_in: "0",
            zc_formIx: "3zb2e5d1ce437642a7046048bcefc78a2a259a55758a0507323f27eb5860f4e62f",
            zc_trackCode: "ZCFORMVIEW",
            scriptless: "yes",
            zc_spmSubmit: "ZCSPMSUBMIT"
        });

        const zohoRes = await fetch("https://dcqorm-cmpzourl.maillist-manage.com/weboptin.zc", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: zohoPayload.toString(),
        });

        if (!zohoRes.ok) {
            return NextResponse.json(
                { error: "Failed to subscribe to newsletter." },
                { status: 502 }
            );
        }

        const responseText = await zohoRes.text();
        if (
            responseText.includes("already a part of our organization") || 
            responseText.includes("already signed up")
        ) {
            return NextResponse.json({ error: "This email address has already been subscribed." }, { status: 409 });
        }

        return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });
    } catch (error) {
        console.error("Zoho Subscription Error:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again later." }, 
            { status: 500 }
        );
    }
}