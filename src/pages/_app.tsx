import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/templates/layout';
import 'styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Layout title={pageProps.title}>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
