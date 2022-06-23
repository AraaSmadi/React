import React from 'react';

function Cards ({name}) {
    return (
          <div class="col-sm-3">
        <img src="logo192.png"/>
        <h3>{name} </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>

      </div>
       );

  }

export default Cards;