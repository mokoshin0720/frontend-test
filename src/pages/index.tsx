import type { NextPage, GetStaticProps } from 'next';
import Card from '@/components/organisms/card';
import getPhotos, { Content, Photos } from 'lib/photos';

export const getStaticProps: GetStaticProps = async () => {
    const json = await getPhotos();
    const contents = json?.photos.contents;

    return {
        props: {
            contents,
        },
    };
};

const Home: NextPage<Photos> = ({ contents }) => {
    console.log(contents);

    return (
        <div className='bg-gray-100'>
            <div className='pl-10 pt-8'>
                <h1 className='text-2xl font-bold'>投稿一覧</h1>
            </div>
            <div>
                <div>
                    {contents.map((value, key) => {
                        return (
                            <div className='p-7' key={key}>
                                <Card
                                    title={value.title}
                                    description={value.description}
                                    img={value.image.url}
                                    width={value.image.width}
                                    height={value.image.height}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
