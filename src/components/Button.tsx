import classes from './button.module.css';

export default function Button(props: {label: string}) {
    return <button className={classes.button} type="submit">Log In</button>;
}