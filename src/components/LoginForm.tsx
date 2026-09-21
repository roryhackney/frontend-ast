"use client";

import TextInput from "./TextInput";
import Button from "./Button";
import { useActionState } from "react";

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
        if (res && res.status) {
            if (res.status === 200) {
                console.log("Success");
                //redirect('/path');
                return null;
            } else if (res.status === 401) {
                console.log("Invalid username or password");
                return "Invalid username or password";
            } else if (res.status === 500) {
                console.log("Application error occurred");
                return "Application error occurred";
            } else {
                console.log("Unknown error");
                return "Unknown error";
            }
        } else {
            console.log("API is currently not working, check that it's running on port 5000");
            return "API is currently not working, check that it's running on port 5000";
        }
    }

    const [error, submitAction] = useActionState(submitHandler, null);

    return (<>
        <form action={submitAction}>
            <TextInput label={"Username"} id={"username"}/>
            <TextInput label={"Password"} id={"password"}/>
            {error && <span>{error}</span>}
            <Button/>
        </form>
    </>);
}