const getPhotos = async () => {
    const myHeaders = new Headers();
    myHeaders.append('X-API-KEY', 'b279aadc-834e-4977-80e2-e7ba2c825bb7');

    const res = await fetch(`https://ispec-test.microcms.io/api/v1/photo`, {
        method: 'GET',
        headers: myHeaders,
    });

    const photos = await res.json();

    photos.contents = photos.contents.sort(comparison);

    return {
        photos,
    };
};

const comparison = (a: any, b: any) => {
    return a.displayOrder - b.displayOrder;
};

export default getPhotos;
