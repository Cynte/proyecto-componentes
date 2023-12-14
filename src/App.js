import './App.css';
import { Presentation } from './Presentation';
import { TopMenuBar } from './TopMenuBar';
import logo from './images/KaluKosten.png'

function App() {

  const images = [
    require('./images/jpeg-optimizer_iStock-1080073590.jpg'),
    require('./images/jpeg-optimizer_iStock-1219739606.jpg'),
    require('./images/jpeg-optimizer_iStock-1282110732.jpg'),
    require('./images/jpeg-optimizer_iStock-1328216244.jpg'),
    require('./images/jpeg-optimizer_iStock-475774878.jpg')
  ]

  return (
    <>
    <TopMenuBar logo={logo}/>
    <Presentation /* unavailables={unavailables} */ images={images}/>
    </>
  );
}

export default App;
