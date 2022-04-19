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

const getPhotos = async (): Promise<{ photos: Photos } | null> => {
    const myHeaders: Headers = new Headers();
    const apiKey: string | undefined = process.env.NEXT_PUBLIC_X_API_KEY;

    if (apiKey == undefined) {
      throw new Error('エラーです')
    }

    myHeaders.append('X-API-KEY', apiKey);
    const url: string = `https://ispec-test.microcms.io/api/v1/photo`;

    const res: Response | null = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
    })
        .catch((error) => {
            console.log(error);
            throw new Error('通信に失敗しました');
        });

    if (!res) return null;

    const photos: Photos | null = await res
        .json()
        // .catch((error) => {
        //     console.log(error);
        //     return null;
        // });

    if (!photos) return null;

    // api層でアプリケーションロジックを書くと用件変更の時に大変になっちゃいます
    photos.contents = photos.contents.sort(comparison);

    return {
        photos,
    };
};

const comparison = (a: any, b: any) => {
    return a.displayOrder - b.displayOrder;
};

export default getPhotos;
