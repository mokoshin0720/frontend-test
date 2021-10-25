import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from '@/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout title={pageProps.title}>
            <Component {...pageProps} />
        </Layout>
    );
}
export default MyApp;
