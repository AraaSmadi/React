import React from "react";
function About(){

    return(
      <>

<div class="container-fluid p-5 bg-danger primary text-white text-center" style={{ color: "white" }} >
  <h1>About US</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>

<div class="container mt-5" style={{ color: "white" }} >
  <div class="row">
    <div class="col-sm-4">
    <img src="jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"  width="400px" />
      <h3>Movie 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
    <img src="img3856.webp"  width="400px"  />
      <h3>Movie 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
    <img src="muppet-movie-updated-poster.jpeg"  width="400px" />
      <h3>Movie 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>
      </>
    );
}
export default About ;