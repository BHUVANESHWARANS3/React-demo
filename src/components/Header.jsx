function Header() {
    return (
        <header className="h-96 bg-contain md:bg-contain bg-center text-white flex items-center justify-center"
            style={{
                backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaIjMLCOoaU6vzv8nMVi2JNwx_j5QrZcTeg&s')"
            }}
        >
            <h1 className="text-2xl md:text-4xl font-bold bg-black/50 p-4 rounded-lg backdrop-blur-lg">
                🚀Welcome to My Website
            </h1>
        </header>

    )
}
export default Header;