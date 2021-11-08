export type Photos = {
    contents: Content[];
    totalCount: number;
    offset: number;
    limit: number;
};

export type Content = {
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
    const myHeaders: Headers = new Headers();
    const X_API_KEY: string | undefined = process.env.X_API_KEY;
    if (X_API_KEY == undefined) {
        return null;
    }
    myHeaders.append('X-API-KEY', X_API_KEY);
    const url: string = `https://ispec-test.microcms.io/api/v1/photo`;

    const res: Response | null = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
    })
        .then((res) => res)
        .catch((error) => {
            console.log(error);
            return null;
        });

    if (!res) return null;

    const photos: Photos | null = await res
        .json()
        .then((photos: Photos) => photos)
        .catch((error) => {
            console.log(error);
            return null;
        });

    if (!photos) return null;

    photos.contents = photos.contents.sort(comparison);

    return {
        photos,
    };
};

const comparison = (a: any, b: any) => {
    return a.displayOrder - b.displayOrder;
};

export default getPhotos;
