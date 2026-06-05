import { NextResponse, NextRequest } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!
const LIST_ID = process.env.BREVO_LIST_ID!
const TEMPLATE_ID = process.env.BREVO_TEMPLATE_ID!

const BREVO_LIST_ID = parseInt(LIST_ID);
const BREVO_TEMPLATE_ID = parseInt(TEMPLATE_ID);

export async function POST(request: NextRequest) {
    try {
        if (!BREVO_API_KEY) {
            console.error('Subscribe API error: BREVO_API_KEY environment variable is missing.');
            return NextResponse.json(
                { error: 'Subscription service misconfigured. API Key is missing.' },
                { status: 500 }
            );
        }
        if (isNaN(BREVO_LIST_ID)) {
            console.error('Subscribe API error: BREVO_LIST_ID environment variable is missing or invalid.');
            return NextResponse.json(
                { error: 'Subscription service misconfigured. List ID is invalid.' },
                { status: 500 }
            );
        }

        const { fullName, email } = await request.json();
        if (!fullName || !email) {
            return NextResponse.json(
                { error: 'Full name and email are required.' }, { status: 400 }
            );
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
            { error: 'Please enter a valid email address.' },
            { status: 400 }
            );
        }
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || '';

        const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify({
                email,
                attributes: {
                    FIRSTNAME: firstName,
                    LASTNAME: lastName,
                },
                listIds: [BREVO_LIST_ID],
                updateEnabled: true,
            }),
        });

        if (!contactRes.ok && contactRes.status !== 204) {
            const errBody = await contactRes.json();
            if (errBody?.code === 'duplicate_parameter') {
            return NextResponse.json(
                { error: 'This email is already subscribed.' },
                { status: 409 }
            );
            }
            console.error('Brevo contact error:', errBody);
            return NextResponse.json(
            { 
                error: 'Could not add you to the list. Please try again.',
                details: errBody
            },
            { status: 500 }
            );
        }

        const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify({
            to: [{ email, name: fullName }],
            templateId: BREVO_TEMPLATE_ID,
            params: {
                FIRSTNAME: firstName,
                FULLNAME: fullName,
            },
            }),
        });

        if (!emailRes.ok) {
            const errBody = await emailRes.json();
            console.error('Brevo email error:', errBody);
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Subscribe handler error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}