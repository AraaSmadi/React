

import Nav from './Components/Nav';
import Cards from './Components/Cards';

function App(){
  
  
  return (
    <div>
  <Nav/>
  <div class="container mt-5">
    <div class="row">
  <Cards name = 'Alaa'/>
  <Cards name = 'Haneen'/>
  <Cards name = 'hala'/>
  <Cards name = 'rama'/>
  </div>
  </div>
    </div>
  );
};

export default App;