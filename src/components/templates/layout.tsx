import Head from 'next/head';
import React from 'react';
import Footer from 'components/organisms/footer';

interface Props {
    title: string;
    children: React.ReactNode;
}

const Layout = (props: Props) => (
    <div>
        <Head>
            <title>{props.title}</title>
        </Head>
        <div className='flex flex-col h-screen'>
            <main className='flex-1 overflow-y-auto'>{props.children}</main>
            <Footer></Footer>
        </div>
    </div>
)

export default Layout;
