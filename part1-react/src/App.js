import './App.css'
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app de curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje message="Estamos trabajando" />
      <Mensaje message="En un curso" />
      <Mensaje message="De React" />
      <Mensaje />
      <Description />
    </div>
  )
}

export default App
