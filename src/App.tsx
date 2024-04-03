import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  <ShoppingCartProvider>
 return <Container className="mb-4">
  <Navbar />
  <Routes>
    <Route path="/" element = { <Home />} />
    <Route path="/store" element = { <Store />} />
    <Route path="/about" element = { <About />} />
  </Routes>
 </Container>
 </ShoppingCartProvider>
}

export default App;