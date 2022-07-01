import React,{useEffect , useState}  from "react";
import {useParams} from "react-router-dom";
function Singlemovie(){
const {id} = useParams();
const[Movies , setMovies] = useState([]);
useEffect(  ()=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
  .then((response)=> response.json())
  .then(data => {setMovies(data);
      console.log(data);
      });
      });
return (
<div class="column col-sm-3" style={{ color: "white" }}  >

 <div class="card-body">
 <img src="muppet-movie-updated-poster.jpeg"/>
 <h3 class="card-title">{Movies.name}</h3>
      <p class="card-text"> {Movies.email}</p>
      <p class="card-text"> {Movies.phone}</p>
</div>
</div>
);

}
export default Singlemovie ; 