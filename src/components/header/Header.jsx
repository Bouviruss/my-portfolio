import Logo from './Logo.png'



const Header = () => {
    

    return (
        <header>
            <nav className="py-10 mb-12 flex justify-between">
            <img src={Logo} alt="logo" width="100" height="100" />
                {/* <h1 className="text-xl font-burtons dark:text-white">DEVLOPEDBYBVS</h1>*/}

                <ul className="flex items-center">
                    <li>
                        <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header