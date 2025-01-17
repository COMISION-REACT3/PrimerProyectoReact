import './Tarjeta.css';
function TarjetaPresentacion({nombre, edad, ocupacion, imagen}) {
  return (
    <div className='tarjeta'>
        <img src={imagen} alt={`Foto de ${nombre}`} />
        <div className='tarjeta-contenido'>
            <h2>{nombre}</h2>
            <p>Edad:{edad}</p>
            <p>Ocupación: {ocupacion}</p>
        </div>
    </div>
  )
}

export default TarjetaPresentacion
