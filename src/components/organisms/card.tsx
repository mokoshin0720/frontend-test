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
