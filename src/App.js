
import './App.css';
import Appbar from './Components/Appbar';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import Navigationbar from './Components/Navigationbar';
import PickoftheWeek from './Components/PickoftheWeek';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
     <Navigationbar/>
     <Banner/>
     <Menu/>
     <PickoftheWeek/>
     <Contact/>

     {/* <Appbar/>
     <Hero/> */}
    </div>
  );
}

export default App;
