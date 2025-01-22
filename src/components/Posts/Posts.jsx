import { useEffect, useState } from 'react';
import './Posts.css';

function Posts() {

//Defino un estado para almacene los posts obtenidos desde la API
const [posts, setPosts] = useState([]);

//estado para controlar cuando se realiza el fetch
const [fetchTrigger, setFetchTrigger] = useState(false)

useEffect(() => {
   //pedido asincronico a la API
   const fetchPosts = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        //actualizamos el estado de posts con la data
        setPosts(data.slice(0,12));        
    } catch (error) {
        console.log('Error al solicitar los posts: ' + error);        
    }

   }
   //llamar a la funcion para realizar la solicitud
   if(fetchTrigger){
    fetchPosts()
   }

   return () => {
    setPosts([])
   }    
   
}, [fetchTrigger]);


  //funcion para manejar el click en el boton
  const handleFetchClick = () => {
    setFetchTrigger(!fetchTrigger)
    if(fetchTrigger === false){
        setPosts([])
    }
  }


  return (
    <>
    <button className='fetch-button' onClick={handleFetchClick}>
            {fetchTrigger === true ? 'Ocultar Posts' : 'Cargar Posts'}
    </button>

    <div className='post-container'>
        {
            posts.map((item) => (
            <div className='post-card' key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
            ))
        }
    </div>    
    </>
  )
}

export default Posts