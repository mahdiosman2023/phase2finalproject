import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <Routes>
             <Route path='/' exact Component={Home} />
             <Route path='/menu' exact Component={Menu} />
             <Route path='/contact' exact Component= {Contact}/>
          </Routes>
          
          <Footer />

        </Router>
    </div>
  );
}

export default App;
