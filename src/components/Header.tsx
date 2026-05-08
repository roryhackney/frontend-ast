import Image from "next/image";
export default function Header() {
    return (
        <header>
            <Image src="/next.svg" alt="Art Supply Tracker logo" width={394} height={80}/>
        </header>
    );
}