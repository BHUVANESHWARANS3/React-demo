import { FaRocketchat } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaScrewdriver, FaPhone } from "react-icons/fa";
const lists = [
    {
        "icon": <FaHome />,
        "Desc": "Home"
    },
    {
        "icon": <FaInfoCircle />,
        "Desc": "Info"
    },
    {
        "icon": <FaScrewdriver />,
        "Desc": "Services"
    },
    {
        "icon": <FaPhone />,
        "Desc": "Contact us"
    }
]
function Navbar() {
    return (
        <nav className="p-7  bg-gray-900 text-white">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <FaRocketchat className="text-3xl text-red-700 transform -rotate-45" />
                    <h1 className="text-3xl font-bold">My Website</h1>
                </div>
                <ul className="space-x-8 items-center text-xl hidden md:flex">
                    {
                        lists.map((list) => {
                           
                            return (<li>
                                <a className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                                    {list.icon}{list.Desc}
                                </a>
                            </li>)
                        })
                            
                        
                    }
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;