import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/templates/layout';
import 'styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Layout title={pageProps.title}>
        <Component {...pageProps} />
    </Layout>
)

export default MyApp;
