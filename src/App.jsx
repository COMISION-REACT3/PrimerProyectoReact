import './App.css';
import {Posts, Saludo, TarjetaPresentacion} from './components'

function App() {

  const tipoSaludo ={
    mañana:'Buen día',
    tarde: 'Buenas tardes',
    noche: 'Buenas noches',
    otros: {
      saludo1:'Hola!',
      saludo2: 'Encantado!',
      saludo3: 'Adios!'
    }
  }

  const nombre = 'Ezequiel Muñoz';

  const fechaActual = new Date(Date.now());
 

  return (    
    
    <div>    
      <Saludo
      tipoSaludo={tipoSaludo}
      nombre={nombre}
      fecha={fechaActual}
      />
      <TarjetaPresentacion
        nombre={nombre}
        edad={33}
        ocupacion="Desarrollador Web"
        imagen="https://lh3.googleusercontent.com/a/ACg8ocJKKwp2qcE9QRnqEOnxGYgPKzaYYSa31m5adG3uASxSlMZzbQ4G=s360-c-no"
      />
      <Posts/>
    </div>
  )
}

export default App
