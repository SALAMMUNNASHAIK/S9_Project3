import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/about"
import Home from "./components/home"
import Master from "./components/master"
import Contact from "./components/contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App