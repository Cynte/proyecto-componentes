import DatePicker from './DatePicker'
import SchedulerBtn from './SchedulerBtn'
import TitleBar from './TitleBar'
import ChangingBackgrounds from './ChangingBackgrounds'
import { TopMenuBar } from './TopMenuBar';
import logo from './images/KaluKosten.png'

export const Home = () => {

  const images = [
    require('./images/jpeg-optimizer_iStock-1080073590.jpg'),
    require('./images/jpeg-optimizer_iStock-1219739606.jpg'),
    require('./images/jpeg-optimizer_iStock-1282110732.jpg'),
    require('./images/jpeg-optimizer_iStock-1328216244.jpg'),
    require('./images/jpeg-optimizer_iStock-475774878.jpg')
  ]

  return (
    <div className='container'>

      <TopMenuBar logo={logo}/>

      <div className='scheduler'>
          <TitleBar/>
          <p>Reservá de manera rápida y simple. Estás a pocos pasos de una gran experiencia.</p>

          <DatePicker value='Seleccione fecha de llegada'/>
          <DatePicker value='Seleccione fecha de partida'/>
          
          <SchedulerBtn/>
      </div>

      <ChangingBackgrounds images={images}/>

    </div>
  )
}
