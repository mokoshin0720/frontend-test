import Image from 'next/image';
import chatPic from '../../../public/chat.png';
import homePic from '../../../public/home.png';
import settingPic from '../../../public/setting.png';

const Footer = () => {
    return (
        <div className='flex justify-evenly p-4'>
            <div>
                <Image src={homePic} width={32} height={32} alt='home' />
            </div>
            <div>
                <Image src={chatPic} width={32} height={32} alt='chat' />
            </div>
            <div>
                <Image src={settingPic} width={32} height={32} alt='setting' />
            </div>
        </div>
    );
};

export default Footer;
