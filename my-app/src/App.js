import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import {Home, About, Contact, MeatRecipe, FishRecipe, VeganRecipe} from "./pages"
import {Footer, Nav} from "./layout"




function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} >
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/contact" element={<Contact/>}>
        </Route>
        <Route exact path="/meat" element={<MeatRecipe/>}>
        </Route>
        <Route exact path="/fish" element={<FishRecipe/>}>
        </Route>
        <Route exact path="/vegan" element={<VeganRecipe/>}>
        </Route>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
