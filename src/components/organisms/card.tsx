import Image from 'next/image';
import style from '../../styles/Card.module.scss';

interface cardProps {
    title: string;
    description: string;
    img: string;
    width: number;
    height: number;
}

const resize = (rawWidth: number, rawHeight: number, size: number): number[] => {
    const width: number = size;
    const height: number = width * (rawHeight / rawWidth);
    return [width, height];
};

const Card = (props: cardProps) => {
    const [width, height]: number[] = resize(props.width, props.height, 500);

    return (
        // <div className='overflow-hidden rounded-lg h-90 w-80 m-auto bg-white'>
        //     <div className='max-h-40 w-full object-cover'>
        //         <Image src={props.img} alt='card' width={width} height={height} />
        //     </div>
        //     <div className='w-full p-4'>
        //         <p className='text-xl font-bold'>{props.title}</p>
        //         <p className='font-light text-md'>{props.description}</p>
        //     </div>
        // </div>
        <div className={style.card}>
            <div className='img'>
                <Image src={props.img} alt='card' width={width} height={height} />
            </div>
            <div className={style.text}>
                <p className='title'>{props.title}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
