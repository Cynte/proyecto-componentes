import './App.css';
import { TopMenuBar } from './TopMenuBar';

function App() {
  return (
    <>
    <TopMenuBar/>
    <div className='botMenuBar'></div>
    <div className='content'>
      <img/>
      <div className='textSection1'>
        <h3></h3>
        <p></p>
      </div>
      <div className='yellowSection'>
        <div></div>
        <img></img>
        <img></img>
      </div>

    </div>
    </>
  );
}

export default App;
