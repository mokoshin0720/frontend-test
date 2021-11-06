import { GetStaticProps } from 'next';
import getPhotos from 'lib/photos';

type Props = {
    photosData: {
        photos: {
            contents: [];
            totalCount: number;
        };
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

const Photos = ({ photosData }: Props) => {
    const length: number = photosData.photos.totalCount;
    console.log(photosData);
    console.log(length);

    return (
        <div>
            <p>test</p>
            <p>{length}</p>
        </div>
    );
};

export default Photos;
