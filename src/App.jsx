import React, {useEffect, useState} from 'react'

import { BsFillMoonStarsFill } from 'react-icons/bs';

import Header from './components/header/Header'
import FirstSection from './components/Body/Firstsection'
import SecondSection from './components/Body/Secondsection'
import ThirdSection from './components/Body/Thirdsection'
import Footer from './components/Footer/Footer'
import Poupup from './components/Body/poupup'


function App() {
    const [darkMode, setDarkMode] = useState(null);

    useEffect( () => {
        if(window.matchMedia('prefers-color-scheme: dark').matches){
            setDarkMode(("dark"));
        } else {
            setDarkMode("light");
        }
    }, []);
    
    useEffect(() => {
        if(darkMode === 'dark'){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        
    }, [darkMode]);

    const handleThemeSwitch = () => {
        setDarkMode(darkMode === 'dark' ? 'light' : 'dark')
    }

return (
    <div>
            <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white"> 
                <div className="min-h-screen">
                    <div>
                        <BsFillMoonStarsFill onClick={handleThemeSwitch}
                            className="cursor-pointer fixed z-10 right-3 top-20 text-xl" />
                        {darkMode === 'dark'}
                    </div>
                    <Header / >
                    <FirstSection / >
                    <SecondSection / >
                    <ThirdSection / >
                    <Poupup / >
                    <Footer / >
                        
                </div>
            </div>
    </div>
    )
};

export default App;