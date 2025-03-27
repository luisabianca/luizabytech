import './App.css'
import mamisImage from './assets/mamis.jpg';

function App() {
  return (
    <div className='main'>
      <p>Luiza by Tech. In Memoriam...</p>
      <img src={mamisImage} alt="" style={{width:'500px',height:'auto'}}/>
    </div>
  )
}

export default App
