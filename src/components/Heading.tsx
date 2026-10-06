import { headingsFont } from "../app/layout";

export default function Heading(props: {level: number, text: string}) {
    if (props.level === 1) return <h1 className={`${headingsFont.className} bold`}>{props.text}</h1>;
    else if (props.level === 2) return <h2 className={`${headingsFont.className} bold`}>{props.text}</h2>;
    return <h3 className={`${headingsFont.className} bold`}>{props.text}</h3>;
}