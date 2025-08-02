import { FaBook,FaReact,FaRocket } from "react-icons/fa";
function Aside() {
    const asidefeatures = [
        {
            "icon" : <FaBook/>,
            "desc":"Vite Documentation"
        },
        {
            "icon" : <FaReact/>,
            "desc":"React Guide"
        },
        {
            "icon" : <FaRocket/>,
            "desc":"FrontEnd Trends"
        }
    ]
    return (
        <aside className="container mx-auto bg-gray-400 rounded-lg p-5 mt-5 w-full md:w-fit">
            <h3 className="text-3xl font-bold mb-4">Related Links</h3>
            {
                asidefeatures.map((data)=>(
                    <p className="text-xl cursor-pointer text-blue-600 mb-3"><span className="inline-block mr-2 align-middle">{data.icon}</span><span>{data.desc}</span></p>
                ))
            }
        </aside>
    )
}
export default Aside;