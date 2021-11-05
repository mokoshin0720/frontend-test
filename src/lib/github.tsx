import { GetStaticProps } from 'next';

interface Photos {
    id: string;
    created_at: string;
    updated_at: string;
    revised_at: string;
    title: string;
    description: string;
    image: Image;
    display_order: number;
}

interface Image {
    url: string;
    height: number;
    width: number;
}

export const getStaticProps: GetStaticProps = async () => {
    const myHeaders: Headers = new Headers();
    myHeaders.append('X-API-KEY', 'b279aadc-834e-4977-80e2-e7ba2c825bb7');

    const res = await fetch(`https://ispec-test.microcms.io/api/v1/photo`, {
        method: 'GET',
        headers: myHeaders,
    });

    const post = res.json();

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: { res }, // will be passed to the page component as props
    };
};
