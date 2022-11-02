import Tickets from './Tickets'
import Voice from './images/Voice.png'
import Coding from './images/coding.png'
import Videos from './images/videos.png'

const ThirdSection = () => {
    return (
        <div className="lg:grid grid-cols-3 gap-10 ms:grid-cols-none">
            <div>
                <Tickets Image={Voice} title="Arabic Voice over"    description="voice over, mixing and make beats."
                tools1="Fl studio" tools2="Audacity" tools3="Cubase"
                />
            </div>
            
            <div>
                <Tickets Image={Coding} title="Web Design"      description="creating Web pages and web app."
                tools1="Html" tools2="Css" tools3="React"
                />
            </div>
            
            <div>
                <Tickets Image={Videos} title="Design and Video Editing"      description="design publication and editing videos."
                tools1="Photoshop" tools2="Ulistrator" tools3="After effect"
                />
            </div>
            
        </div>
    )
};

export default ThirdSection
