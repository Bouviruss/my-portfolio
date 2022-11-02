import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Avatar from './images/Avatar.svg'



const FirstSection = () => {
    return (
        <div className="text-center p-10 py-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Ali Bougajja</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">Developer and designer.</h3>
            <p className="text-md py-5 leadinf-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">Freelancer providing services for Voice-over Arabic, Mixing, and programming.
                Join me down below and let's get cracking!
            </p>
            <div className="cursor-pointer text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/bougajja-ali" target="_blank"><AiFillLinkedin  /></a>
                
                <a href="https://twitter.com/ProdBvs" target="_blank"><AiFillTwitterCircle /></a>
                
                <a href="https://github.com/Bouviruss" target="_blank"><AiFillGithub /></a>
                
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96 overflow-hidden">
                <img src={Avatar} layout="fill" objectfit="cover"/>
            </div>
        </div>
    )
};

export default FirstSection