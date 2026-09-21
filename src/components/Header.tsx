import Image from "next/image";
import Link from "next/link";
import classes from "./header.module.css";

export default function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <Link href="/login">Log In</Link>
                <Image src="/next.svg" alt="Art Supply Tracker logo" width={394} height={80}/>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
}