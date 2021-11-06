import { GetStaticProps } from 'next';
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

const Photos = ({ photosData }: Props) => {
    const length: number = photosData.photos.totalCount;
    const id: string = photosData.photos.contents[0].id;
    console.log(length);
    console.log(id);

    return (
        <div>
            <p>length: {length}</p>
            <p>id: {id}</p>
            <p>title: {photosData.photos.contents[0].title}</p>
            <p>image-url: {photosData.photos.contents[0].image.url}</p>
        </div>
    );
};

export default Photos;
