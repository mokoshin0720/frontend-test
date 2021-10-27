import Image from 'next/image';
import cardPic from '../../../public/card.png';

const Card = () => {
    return (
        <div className='bg-red-200 rounded-lg content-center'>
            <div>
                <Image src={cardPic} width={512} height={128} alt='card' />
            </div>
        </div>
    );
};

export default Card;
