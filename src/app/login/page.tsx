import LoginForm from "@/components/LoginForm";
import Heading from "@/components/Heading";
import Code2FAForm from "@/components/Code2FAForm";
import {headingsFont} from "../layout";
import FACodeForm from "@/components/Code2FAForm";

export default function Login() {
  return (
      <>
        <Heading level={1} text={"Log In"}/>
        <LoginForm/>

        <Heading level={1} text="Enter 2FA Code"/>
        <Code2FAForm/>
      </>
  );
}
