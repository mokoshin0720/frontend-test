// import ChatSVG from '@/public/chat.svg';
import ChatSVG from '../../../public/chat.svg';
import SettingSVG from '../../../public/setting.svg';
import style from '../../styles/modules/Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.container}>
            <div>
                <button>
                  <img src='home.svg' />
                </button>
            </div>
            <div>
                <button>
                    <ChatSVG />
                </button>
            </div>
            <div>
                <button>
                    <SettingSVG />
                </button>
            </div>
        </div>
    );
};

export default Footer;
