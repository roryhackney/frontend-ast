import LoginForm from "@/components/LoginForm";
import Heading from "@/components/Heading";
import {headingsFont} from "../layout";

export default function Login() {
  return (
      <>
        <Heading level={1} text={"Log In"}/>
        <LoginForm/>
      </>
  );
}
