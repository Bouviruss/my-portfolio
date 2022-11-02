


const Tickets = (props) => {
    return (
        <div>
            <div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
                    <img src={props.Image} className="w-[100px] h-[100px] relative mx-auto" />
                    <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-800">{props.title}</h3>
                    <p className="py-2 dark:text-gray-800">{props.description} </p>
                    <h4 className="py-4 text-teal-600">Softwares tools I use</h4>
                    <p className="text-gray-800">{props.tools1}</p>
                    <p className="text-gray-800">{props.tools2}</p>
                    <p className="text-gray-800">{props.tools3}</p>
                </div>
            </div>
        </div>
        
    )
};

export default Tickets