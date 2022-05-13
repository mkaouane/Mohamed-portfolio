import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Socials = () => {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/mohamed-k-47b48a165/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin /></a>
            <a href={"https://github.com/mkaouane"} target={"_blank"} rel={"noreferrer"}><FaGithub /></a>
        </div>
    )
}

export default Socials