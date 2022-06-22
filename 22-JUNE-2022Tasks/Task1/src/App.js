import logo from './logo.svg';
import './App.css';
import Sorting from './Components/Sorting';
import Mapping from './Components/Mapping';
import Filtering from './Components/Filtering';
function App() {
  return (
    <div className="container">
     <Sorting/>
     <Mapping/>
     <Filtering/>
    </div>
  );
}

export default App;
