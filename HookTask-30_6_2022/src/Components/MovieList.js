import React,{useEffect , useState}  from "react";
import Singlemovie from './Singlemovie';
import { NavLink } from "react-router-dom";
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
<div class="row"  >
    {Movies.map(m =>(
 <div class="column col-sm-3">
 <div class="card-body">
 <h3 class="card-title">{m.name}</h3>
      <p class="card-text"> {m.email}</p>
      <p class="card-text"> {m.phone}</p>
      <NavLink   to={`/Movie/${m.id}`}  class="btn btn-primary">Show</NavLink>
     
</div>
</div>)
    )
    }
    </div>
);

}
export default MovieList ; 
