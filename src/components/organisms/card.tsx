import Image from 'next/image';

interface cardProps {
    title: string;
    description: string;
    img: string;
    width: number;
    height: number;
}

const Card = (props: cardProps) => {
    const width: number = 500;
    const height: number = width * (props.height / props.width);

    return (
        <div className='overflow-hidden rounded-lg h-90 w-80 m-auto bg-white'>
            <div className='max-h-40 w-full object-cover'>
                <Image src={props.img} alt='card' width={width} height={height} />
            </div>
            <div className='w-full p-4'>
                <p className='text-xl font-bold'>{props.title}</p>
                <p className='font-light text-md'>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
