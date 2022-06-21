import React from 'react';

class Cards extends React.Component {

// constructor(props){
//   super(props);
//   this.state = 
// [
//   {name:Araa},
//   {name:Rama},
//   {name:Samer},
//   {name:Rahma},
// ];
  
// }

  render() {
    return (
          <div class="col-sm-3">
        <img src="logo192.png"/>
        <h3>{this.props.name} </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    
      </div>
  

       );

  }
}
export default Cards;
