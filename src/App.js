import './App.css';
import { Trips } from './Trips'
import { Home } from './Home';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/proyecto-componentes' exact Component={Home}/>
        <Route path='/proyecto-componentes/trips' Component={Trips}/>
      </Routes>
    </>
  );
}

export default App;
