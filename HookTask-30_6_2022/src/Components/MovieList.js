import React,{useEffect , useState}  from "react";
import Singlemovie from './Singlemovie';
import { NavLink } from "react-router-dom";
document.body.style.backgroundColor = "black"; 

function MovieList(){
const[Movies , setMovies] = useState([]);
useEffect(  ()=> {
  fetch('https://jsonplaceholder.typicode.com/users') 
.then((response)=> response.json())
.then(data => {setMovies(data);
    console.log(data);
    });
    });
  
return (
<div class="row" style={{ color: "white" }} >
    {Movies.map(m =>(
 <div class="column col-sm-3">
 <div class="card-body">
 <h3 class="card-title">{m.name}</h3>
      <p class="card-text"> {m.email}</p>
      <p class="card-text"> {m.phone}</p>
      <a class="btn btn-danger" >
      <NavLink  to={`/Movie/${m.id}`}  style={{ color: "white" , textDecoration:" underline" }}>Show</NavLink>
      </a>
</div>
</div>)
    )
    }
    </div>
);

}
export default MovieList ; 
