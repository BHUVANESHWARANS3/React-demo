import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Article from './components/Article';
import Table from './components/Table';
import Aside from './components/Aside';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <div className="container mx-auto flex flex-col md:flex-row">
        <main className='flex-1'>
          <Article />
          <Table />
        </main>
        <Aside/>
      </div>
      <Footer/>
    </>
  )
}

export default App
