import ChatSVG from '../../../public/chat.svg';
import HomeSVG from '../../../public/home.svg';
import SettingSVG from '../../../public/setting.svg';
import style from '../../styles/modules/components/Footer.module.scss';

const Footer = () => (
    <footer className={style.container}>
        <button className={style.button}>
            <HomeSVG />
        </button>
        <button className={style.button}>
            <ChatSVG />
        </button>
        <button className={style.button}>
            <SettingSVG />
        </button>
    </footer>
)

export default Footer;
