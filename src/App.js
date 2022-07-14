import './App.css';
import NavMenu from './Components/NavMenu/NavMenu';
import Slider from './Components/Slider/Slider';
import LogoBar from './Components/LogoBar/LogoBar';
import AdsBoxes from './Components/AdsBoxes/AdsBoxes';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Slider />
      <LogoBar />
      <AdsBoxes />
    </div>
  );
}

export default App;
