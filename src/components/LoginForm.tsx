"use client";

import TextInput from "./TextInput";
import Button from "./Button";
import { useActionState } from "react";

type MyJson = {
    "success": boolean
}

async function stubApi(shouldPass: boolean): Promise<MyJson> {

    return new Promise(resolve => {
        if (shouldPass) {
            resolve({"success": true});
        } else {
            //could also reject() and do a try catch in handleSubmit - may need to for actual fetch()
            resolve({"success": false});
        }
    });
}

export default function LoginForm() {
    //expected by useActionState, returns the form error message if any after calling login API
    const submitHandler = async function (prevState: String | null, formData: FormData) {
        const name = formData.get('Username');
        const pass = formData.get("Password");
        console.log({name, pass}, "!");
        const response = await stubApi(true);
        if (response.success === true) {
            console.log("Success");
            // redirect("/path");
            return null;
        } else {
            console.log("Failure");
            return "Invalid username or password";
        }
    }

    const [error, submitAction] = useActionState(submitHandler, null);

    return (
        <form action={submitAction}>
            <TextInput label={"Username"} id={"username"}/>
            <TextInput label={"Password"} id={"password"}/>
            {error && <span>{error}</span>}
            <Button/>
        </form>
    );
}