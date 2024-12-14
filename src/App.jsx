import About from "./Component/About"
import Certificate from "./Component/Certificate"
import Connection from "./Component/Connection"
import Footer from "./Component/Footer"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import Portfolio from "./Component/Portfolio"
import Skills from "./Component/Skills"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Certificate />
    <Connection />
    <Footer />
    </div>
    <Toaster />
    </>
  )
}

export default App
