import type { NextPage, GetStaticProps } from 'next';
import Card from '@/components/organisms/card';
import style from '@/styles/Index.module.scss';
import getPhotos, { Content, Photos } from 'lib/photos';
import {useEffect, useState} from 'react';

// export const getStaticProps: GetStaticProps | undefined = async () => {
//     const json = await getPhotos();
//     const contents = json?.photos.contents;

//     return {
//         props: {
//             contents,
//         },
//     };
// };

const Home: NextPage<Photos> = () => {
  const [contents, setContents] = useState<Content[] | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getPhotos().then(json => {
      setContents(json?.photos.contents || null)
    }).catch(e => setError(e))
  },[])

    return (
        <div className={style.container}>
            <div className='w-full max-w-sm my-0 mx-auto'>
                <h1 className='page-title'>投稿一覧</h1>
            </div>
            <div className={style.contents}>
                {contents?.map((content, key) => {
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
                }) ?? <p>loading...</p>}
                { error && <p>{ error.message }</p> }
            </div>
        </div>
    );
};

export default Home;
