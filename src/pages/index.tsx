import type { NextPage, GetStaticProps } from 'next';
import style from '../styles/modules/pages/Index.module.scss';
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

const Home: NextPage<Photos> = ({ contents }) => (
    <div className={style.container}>
        <header className={style.header}>
            <h1 className={style.pageTitle}>
                投稿一覧
            </h1>
        </header>

        <div className={style.contents}>
            {contents.map((content, key) => (
                <Card
                    key={key}
                    title={content.title}
                    description={content.description}
                    img={content.image.url}
                    width={content.image.width}
                    height={content.image.height}
                />
            ))}
        </div>
    </div>
)

export default Home;
