import Head from 'next/head';
import React from 'react';

interface Props {
    title: string;
    children?: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <main>
                <div>{props.children}</div>
            </main>
            <footer>
                <div className='bg-gray-200'>
                    <p>here</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
