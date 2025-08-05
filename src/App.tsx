import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Footer from './components/Footer/Footer.tsx'
import Main from './components/Main/Main.tsx'
import ProductList from './components/Main/ProductList.tsx'

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default App
