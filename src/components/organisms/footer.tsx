// path指定
import ChatSVG from '../../../public/chat.svg';
import HomeSVG from '../../../public/home.svg';
import SettingSVG from '../../../public/setting.svg';
// sample
import style from '~/src/styles/modules/Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.container}>
            <div>
                <button>
                    <HomeSVG />
                </button>
            </div>
            <div>
                <button>
                    <ChatSVG />
                </button>
            </div>
            <div>
                {/* routing考察 */}
                <button>
                    <SettingSVG />
                </button>
            </div>
        </div>
    );
};

export default Footer;
