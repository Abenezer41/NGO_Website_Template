import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav'
import Slider from './Components/Slider/Slider';
import About from './Components/About/About'
import OurMission from './Components/OurMission/OurMission';
import Achive from './Components/Achive/Achive';
import Meet from './Components/Meet/Meet';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr />
      <Nav/>
      <Slider/>
      <About/>
      <OurMission/>
      <div className="achive"><Achive/></div>
      <Meet/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
