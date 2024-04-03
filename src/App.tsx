import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/navbar"

function App() {
 return <Container className="mb-4">
  <Navbar />
  <Routes>
    <Route path="/" element = { <Home />} />
    <Route path="/" element = { <Store />} />
    <Route path="/" element = { <About />} />
  </Routes>
 </Container>
}

export default App;