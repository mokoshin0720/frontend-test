import type { NextPage } from 'next';
import cardPic1 from '../../public/card1.png';
import cardPic2 from '../../public/card2.png';
import cardPic3 from '../../public/card3.png';
import Card from '@/components/organisms/card';

const Home: NextPage = () => {
    const title: string = 'ここにタイトル';
    const content: string =
        'ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。';

    return (
        <div className='bg-gray-100'>
            <div className='pl-10 pt-8'>
                <h1 className='text-2xl font-bold'>投稿一覧</h1>
            </div>
            <div>
                <div className='p-7'>
                    <Card title={title} content={content} img={cardPic1} />
                </div>
                <div className='p-7'>
                    <Card title={title} content={content} img={cardPic2} />
                </div>
                <div className='p-7'>
                    <Card title={title} content={content} img={cardPic3} />
                </div>
                <div className='p-7'>
                    <Card title={title} content={content} img={cardPic1} />
                </div>
            </div>
        </div>
    );
};

export default Home;
