export type Props = {
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

const getPhotos = async () => {
    const myHeaders = new Headers();
    myHeaders.append('X-API-KEY', 'b279aadc-834e-4977-80e2-e7ba2c825bb7');

    const res: Response | null = await fetch(`https://ispec-test.microcms.io/api/v1/photo`, {
        method: 'GET',
        headers: myHeaders,
    })
        .then((res) => res)
        .catch((error) => {
            console.log(error);
            return null;
        });

    if (!res) return null;

    const photos = await res
        .json()
        .then((json: Props) => json)
        .catch((error) => {
            console.log(error);
            return null;
        });

    if (!photos) return null;

    // json.photosData.photos.contents = json.photosData.photos.contents.sort(comparison);

    return {
        photos,
    };
};

const comparison = (a: any, b: any) => {
    return a.displayOrder - b.displayOrder;
};

export default getPhotos;
