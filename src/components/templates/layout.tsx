import Head from 'next/head';
import React from 'react';
// path指定
import Footer from '~/src/components/organisms/footer';

// Propsのinterfaceも汎用性高いので、exportさせたい
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
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;
