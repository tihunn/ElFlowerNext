import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";

const MainContainer = ({children, keyword}) => {
    return (
        <>
            <Head>
                <meta keyword={"ulby tv nextjs " + keyword}/>
                <title> ElFlower </title>
            </Head>

            <div className="navbar">
                <Link href="/" className="link">
                    Main page
                </Link>
                <Link href="/users" className="link">
                    Users page
                </Link>
            </div>
                <div>
                    {children}
                </div>

        </>
    )
}

export default MainContainer