import { GetStaticProps } from 'next';

const Photos = ({ id, build_time }) => {
    return (
        <div>
            <p>IDは{id}です</p>
            <p>{build_time}</p>
        </div>
    );
};

// interface Photos {
//     id: string;
//     created_at: string;
//     updated_at: string;
//     revised_at: string;
//     title: string;
//     description: string;
//     image: Image;
//     display_order: number;
// }

// interface Image {
//     url: string;
//     height: number;
//     width: number;
// }

export const getStaticProps = async () => {
    // const myHeaders: Headers = new Headers();
    // myHeaders.append('X-API-KEY', 'b279aadc-834e-4977-80e2-e7ba2c825bb7');

    const res = await fetch('https://api.github.com/users/mokoshin0720');
    const posts = await res.json();
    const id = posts.id;
    // ビルド時刻の取得
    const build_time = new Date().toString();

    return {
        props: {
            id,
            build_time,
        },
    };
};

export default Photos;
