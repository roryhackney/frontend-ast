"use client";

import TextInput from "./TextInput";
import Button from "./Button";
import { useActionState } from "react";
import classes from './loginform.module.css';

export default function LoginForm() {
    type loginProps = {
        username: string,
        password: string
    };
    
    //expected by useActionState, returns the form error message if any after calling login API
    const submitHandler = async function (prevState: String | null, formData: FormData) {
        const username = `${formData.get('Username')}`;
        const password = `${formData.get("Password")}`;
        console.log(formData);
        console.log({username, password}, "!");
        let res = {status: 500};
        try {
            const body: BodyInit = JSON.stringify({
                username: username, password: password
            });
            res = await fetch('http://localhost:5173/login', { //backend should be running on 5173 for this to work
                method: 'POST',
                body
            });
        } catch (err) {
            console.log("Fetch error:", err);
        }

        switch(res.status) {
            case 200: {
                console.log("Login Success");
                return null;
            }
            case 401: return "Invalid username or password";
            case 429: return "Out of attempts, try again later";
            case 500: return "Application error occurred";
            default: return "Unknown error";
        }
    }

    const [error, submitAction] = useActionState(submitHandler, null);

    return (<>
        <form className={classes.form} action={submitAction}>
            {error && <span className={classes.error}>{error}</span>}
            <TextInput label={"Username"} id={"username"}/>
            <TextInput label={"Password"} id={"password"}/>
            <Button label="Log In"/>
        </form>
    </>);
}