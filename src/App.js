import './App.css';
import ShelterContainer from './containers/ShelterContainer';
import PetContainer from './containers/PetContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Animal Shelters</h1>
        <ShelterContainer /> */}
        <h1>Pets</h1>
        <PetContainer />
      </header>
    </div>
  );
}

export default App;
