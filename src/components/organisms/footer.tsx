import ChatSVG from '../../../public/chat.svg';
import HomeSVG from '../../../public/home.svg';
import SettingSVG from '../../../public/setting.svg';
import style from '../../styles/modules/Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.container}>
            <div>
                <HomeSVG />
            </div>
            <div>
                <ChatSVG />
            </div>
            <div>
                <SettingSVG />
            </div>
        </div>
    );
};

export default Footer;
