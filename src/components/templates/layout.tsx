import Head from 'next/head';
import React from 'react';

interface Props {
    title: string;
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className='flex flex-col h-screen'>
                <main className='flex-1 overflow-y-auto'>{props.children}</main>
                <footer className=' bg-gray-400'>
                    <p>footer</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
