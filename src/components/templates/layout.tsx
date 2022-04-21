import Head from 'next/head';
import React from 'react';
import style from '../../styles/modules/components/Layout.module.scss';
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
        <div className={style.layout}>
            <main>{props.children}</main>
            <Footer></Footer>
        </div>
    </div>
)

export default Layout;
