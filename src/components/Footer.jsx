function Footer() {
    return (
        <footer className="text-center p-5 bg-gray-800 text-white mt-2">
            <p className="text-xl">2025 MyWebsite. All Rights Reserved</p>
            <div className="text-xl mt-3 space-x-6 cursor-pointer">
                <a href="" className="hover:text-blue-500">📷Instagram
                </a>
                <a href className="hover:text-blue-500">📱Facebook
                </a><a href="" className="hover:text-blue-500"><span className="text-black font-bold text-2xl ">X</span> Twitter</a>
            </div>
        </footer>
    )
}
export default Footer;