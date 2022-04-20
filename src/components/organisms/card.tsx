import Image from 'next/image';
import style from '../../styles/modules/components/Card.module.scss';

interface cardProps {
    title: string;
    description: string;
    img: string;
    width: number;
    height: number;
}

const Card = (props: cardProps) => (
    <div className={style.card}>
        <Image
            src={props.img}
            alt='投稿写真'
            width={500}
            height={240}
            layout={'responsive'}
            objectFit={'cover'} />
        <div className={style.text}>
            <h2 className={style.title}>
                {props.title}
            </h2>
            <p className={style.description}>
                {props.description}
            </p>
        </div>
    </div>
)

export default Card;
