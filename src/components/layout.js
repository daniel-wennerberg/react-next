import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react';

const Layout = ({ children }) => (
    <Fragment>
        <Head>
            <title>My first Next App</title>
        </Head>
        <nav>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/about"}>About</Link>
        </nav>

        { children }

        <footer>
            Footer
        </footer>
    </Fragment>
);

export default Layout