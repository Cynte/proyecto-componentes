import './App.css';
import { Presentation } from './Presentation';
import { TopMenuBar } from './TopMenuBar';
import logo from './images/placeholder-logo-1.png'

function App() {

  const images = [
    require('./images/slider-nautico.e83e3c1.jpg'),
    require('./images/slider-nautico2.jpg')
  ]

  return (
    <>
    <TopMenuBar logo={logo}/>
    <Presentation /* unavailables={unavailables} */ images={images}/>
    </>
  );
}

export default App;
