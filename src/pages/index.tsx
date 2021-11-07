import type { NextPage, GetStaticProps } from 'next';
import cardPic1 from '../../public/card1.png';
import cardPic2 from '../../public/card2.png';
import cardPic3 from '../../public/card3.png';
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
                <div className='p-7'>
                    <Card
                        title={photosData.photos.contents[0].title}
                        description={photosData.photos.contents[0].description}
                        img={cardPic1}
                    />
                </div>
                <div className='p-7'>
                    <Card
                        title={photosData.photos.contents[1].title}
                        description={photosData.photos.contents[1].description}
                        img={cardPic1}
                    />
                </div>
                <div className='p-7'>
                    <Card
                        title={photosData.photos.contents[2].title}
                        description={photosData.photos.contents[2].description}
                        img={cardPic1}
                    />
                </div>
                <div className='p-7'>
                    <Card
                        title={photosData.photos.contents[3].title}
                        description={photosData.photos.contents[3].description}
                        img={cardPic1}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
