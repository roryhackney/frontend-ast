export default function TextInput(props: {label: string, id: string}) {
    const inputType = props.label === "Password" ? "password": "text";
    return (<>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={inputType} name={props.label} id={props.id}/>
    </>);
}