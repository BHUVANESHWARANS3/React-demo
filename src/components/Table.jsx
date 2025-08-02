import { FaDatabase,FaPerson } from "react-icons/fa6";
const tablecolumns = [
    {
        "icon":"🙋",
        "desc":"Avatar"
    },
    {
        "icon":"🙋",
        "desc":"Name"
    },
    {
        "icon":"✅",
        "desc":"Status"
    }
];
const bodydata = [
    {
        "icon":<FaPerson/>,
        "name":"Alice",
        "status":"active"
    },
    {
        "icon":<FaPerson/>,
        "name":"Bob",
        "status":"inactive"
    }
]
function Table() {
    return (
        <section className="container mx-auto px-2 mt-10">
            <h1 className="flex items-center text-3xl font-bold text-green-600 mb-6"><FaDatabase/>User Data</h1>
            <table className="border border-collapse border-gray-200 w-full mt-5 shadow-2xl">
                <thead>
                    <tr className="bg-gray-200">
                    {tablecolumns.map((col) => (
                        <th className="border border-collapse border-gray-200 p-5 text-2xl">
                           {col.icon}
                           {col.desc}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                   {
                    bodydata.map((data) => (
                        <tr>
                            <td className="border border-collapse border-gray-200 p-5 text-4xl font-semibold"><FaPerson style={{backgroundColor:"yellow",borderRadius:"50px",padding:"4px 0px",marginLeft:"auto",marginRight:"auto"}}/></td>
                            <td className="border border-collapse border-gray-200 p-5 text-xl font-semibold text-center">{data.name}</td>
                            <td className={`border border-collapse border-gray-200 p-5 text-xl font-semibold text-center ${data.status ==="active" ? `text-green-800`: `text-red-600`}`}>{data.status}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </section>
    );
}
export default Table;