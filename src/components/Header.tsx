import Image from "next/image";
import Link from "next/link";
import classes from "./header.module.css";

export default function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <Link className={classes.link} href="/login">Log In</Link>
                <Image src="/next.svg" alt="Art Supply Tracker logo" width={394} height={80}/>
                <Link className={classes.link} href="/about">About</Link>
            </nav>
        </header>
    );
}