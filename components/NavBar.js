import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar(){
	const router = useRouter();	// location 정보 획득
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
			</Link>
			<Link href="/about">
				<a className={[styles.link, router.pathname === "/about" ? "newactive" : ""].join(" ")}>About</a>
			</Link>
			<style jsx>
			{`
				.newactive{
					color : black;
				}
			`}
			</style>
		</nav>
	)
}