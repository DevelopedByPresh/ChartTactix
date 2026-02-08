

import './App.css'
import Header from "./components/header"
import About from "./components/about"
import BooksCarousel from './components/books'
import Testimonials from './components/testimonials'
import Community from "./components/community"
import Footer from './components/footer'

function App() {


  return (
    <div style={{backgroundColor:'black'}}>
   <Header/>
   <About/>
   <BooksCarousel/>
   <Testimonials/>
   <Community/>
   <Footer/>
      
    </div>
  )
}

export default App
