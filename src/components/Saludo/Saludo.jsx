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

  return (
   <>
    <h1>{mañana}, {nombre}</h1>
    <p>¡Este es mi primer componente de React!</p>
    <p className='fecha'>Hoy es {formatDate}</p>
   </>      
  )
  
}

export default Saludo