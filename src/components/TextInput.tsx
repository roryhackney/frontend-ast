import classes from './textinput.module.css';

export default function TextInput(props: {label: string, id: string}) {
    const inputType = props.label === "Password" ? "password": "text";
    return (
        <div>
            <label className={classes.label} htmlFor={props.id}>{props.label}</label>
            <input className={classes.input} type={inputType} name={props.label} id={props.id}/>
        </div>
    );
}