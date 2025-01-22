import { useState } from 'react';
import './Saludo.css';

function Saludo({tipoSaludo, nombre, fecha}) {

  const {mañana, tarde, noche} = tipoSaludo;
  
  const formatDate = new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Argentina/Buenos_Aires'
  }).format(new Date(fecha))

  //CAMBIAR EL ESTADO DEL SALUDO
  const [saludoActual, setSaludoActual] = useState(mañana);

  //FUNCION PARA CAMBIAR EL SALUDO
  const cambiarSaludo = () => {
    if(saludoActual === mañana){
      setSaludoActual(tarde)
    } else if(saludoActual === tarde){
      setSaludoActual(noche)
    } else {
      setSaludoActual(mañana)
    }
  };

  return (
   <>
    <h1>{saludoActual}, {nombre}</h1>
    <p>¡Este es mi primer componente de React!</p>
    <p className='fecha'>Hoy es {formatDate}</p>

    <button 
    className='btn-cambiar-saludo'
    onClick={cambiarSaludo}
    >
      Cambiar Saludo
    </button>
   </>      
  )
  
}

export default Saludo