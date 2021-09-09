import logo from './logo.svg';
import './App.css';
import ShelterContainer from './containers/ShelterContainer';
import GridBoxes from './components/GridBoxes'
import PetContainer from './containers/PetContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Animal Shelters</h1>
        <ShelterContainer />
        <PetContainer />
      </header>
    </div>
  );
}

export default App;
