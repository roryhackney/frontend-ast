"use client";

import TextInput from "./TextInput";
import Button from "./Button";
import { useActionState } from "react";
import classes from './loginform.module.css';

export default function() {
    const submitHandler = async function (prevState: String | null, formData: FormData) {
        const code = `${formData.get('code')}`;
        console.log("code entered", code);
        if (code.trim() === "") {
            return "Please enter your 2FA code."
        }
        let res = {status: 500};
        try {
            const body: BodyInit = JSON.stringify({
                code: code
            });
            res = await fetch('http://localhost:5173/', {
                method: 'POST',
                body
            });
        } catch (err) {
            console.log("Fetch error:", err);
        }

        switch (res.status) {
            case 200: {
                console.log("2FA Success");
                //redirect('/path');
                return null;
            }
            case 401: return "Invalid code";
            case 429: return "Out of attempts, try again later"
            case 500: return "Application error occurred";
            default: return "Unknown error";
        }
    }

    const [error, submitAction] = useActionState(submitHandler, null);
    
    return (
        <form className={classes.form} action={submitAction}>
            {error && <span className={classes.error}>{error}</span>}
            <TextInput label={"Enter code"} id="code"/>
            <Button label="Submit"/>
        </form>
    )
}