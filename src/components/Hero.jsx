function Hero() {
    return (
        <section className="text-center text-white bg-gray-200 py-16">
            <img className="mx-auto md:w-1/6 w-1/2" src="https://robodk.com/blog/wp-content/uploads/2019/09/christopher-gower-m_HRfLhgABo-unsplash.jpg"  alt=""></img>
           
            <h1 className="font-bold text-2xl md:text-5xl text-black mt-5">Building Amazing UI's with React & Vite</h1>
            <p className="text-xl text-gray-600 mt-2">Fast,lightweight and modern frontend development.</p>
            <button className="bg-blue-500 rounded-lg p-4 text-xl font-semibold mt-4 transform -translate-x-2 ">🚀Get Started</button>
        </section>
    );
}
export default Hero;