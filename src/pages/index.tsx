import type { NextPage, GetStaticProps } from 'next';
import Card from '@/components/organisms/card';
import getPhotos from 'lib/photos';

type Props = {
    photosData: {
        photos: {
            contents: Content[];
            totalCount: number;
            offset: number;
            limit: number;
        };
    };
};

type Content = {
    id: string;
    title: string;
    description: string;
    image: {
        url: string;
        height: number;
        width: number;
    };
};

export const getStaticProps: GetStaticProps = async () => {
    const photosData = await getPhotos();

    return {
        props: {
            photosData,
        },
    };
};

const Home: NextPage<Props> = ({ photosData }) => {
    return (
        <div className='bg-gray-100'>
            <div className='pl-10 pt-8'>
                <h1 className='text-2xl font-bold'>投稿一覧</h1>
            </div>
            <div>
                <div>
                    {photosData.photos.contents.map((value, key) => {
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
