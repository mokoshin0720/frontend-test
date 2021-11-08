import type { NextPage, GetStaticProps } from 'next';
import style from '../styles/Index.module.scss';
import Card from '@/components/organisms/card';
import getPhotos, { Photos } from 'lib/photos';

export const getStaticProps: GetStaticProps | undefined = async () => {
    const json = await getPhotos();
    const contents = json?.photos.contents;

    return {
        props: {
            contents,
        },
    };
};

const Home: NextPage<Photos> = ({ contents }) => {
    return (
        <div className={style.container}>
            <div className='header'>
                <h1 className='page-title'>投稿一覧</h1>
            </div>
            <div className={style.contents}>
                {contents.map((content, key) => {
                    return (
                        <div key={key} className='card'>
                            <Card
                                title={content.title}
                                description={content.description}
                                img={content.image.url}
                                width={content.image.width}
                                height={content.image.height}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
        // <div className='bg-gray-100'>
        //     <div className='pl-10 pt-8'>
        //         <h1 className='text-2xl font-bold'>投稿一覧</h1>
        //     </div>
        //     <div>
        //         <div>
        //             {contents.map((content, key) => {
        //                 return (
        //                     <div className='p-7' key={key}>
        //                         <Card
        //                             title={content.title}
        //                             description={content.description}
        //                             img={content.image.url}
        //                             width={content.image.width}
        //                             height={content.image.height}
        //                         />
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Home;
