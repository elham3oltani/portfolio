
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <p className=' font-extrabold text-red-800 p-4 m-4 text-2xl'>this is a test text</p>
   <Navbar />
   <Home />
   <About />
   <Skills />
   <Work />
   <Contact />
    </div>
  );
}

export default App;
