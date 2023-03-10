import GithubIcon from "../icons/GithubIcon";
import TelegramIcon from "../icons/TelegramIcon";
import MartiansIcon from "../icons/MartiansIcon";
import {Link} from 'react-router-dom'

type SocialLayout = 'vertical' | 'horizontal';

const Socials = ({layout}: {layout: SocialLayout}) => {
    return (
        <div className={`socials ${layout}`}>
           <Link target="_blank" to='https://github.com/Klimenteen'>
                <GithubIcon/>
           </Link>
           <Link target="_blank" to='https://t.me/Kliment_dev'>
                <TelegramIcon/>
           </Link>
        </div>
    )
}

export default Socials;