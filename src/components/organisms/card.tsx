import { VFC } from 'react';
import Image from 'next/image';
import style from '../../styles/modules/Card.module.scss';

// component 層には計算ロジックをあまり書かないのがみんな助かると思います！
interface CardProps {
    readonly title: string;
    readonly description: string;
    readonly img: string;
    readonly width: number;
    readonly height: number;
}

export class CardModel implements CardProps {
    readonly title: string;
    readonly description: string;
    readonly img: string;
    readonly width: number;
    readonly height: number;

    constructor(data: CardProps) {
      this.title = data.title
      this.description = data.description
      this.img = data.img
      this.width = data.width
      this.height = data.height

    }

    resize(size: number): [number, number] {
      const width: number = size;
      const height: number = width * (this.height / this.width);
      return [width, height];

    }

}
// ここまでを別で定義したmodel層に入れて呼び出してあげると、conponentsはデータの描画に専念できる。


const Card: VFC<CardProps> = (props: CardProps) => {
    const [width, height]: number[] = new CardModel(props).resize(500);

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
