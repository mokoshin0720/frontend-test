import ChatSVG from '../../../public/chat.svg';
import HomeSVG from '../../../public/home.svg';
import SettingSVG from '../../../public/setting.svg';

const Footer = () => {
    return (
        <div className='flex justify-evenly p-4 shadow'>
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
