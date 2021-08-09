import logo from './logo.svg';
import './App.css';
import ShelterContainer from './containers/ShelterContainer';
import GridBoxes from './components/GridBoxes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h3>Animal Shelters</h3> */}
        <GridBoxes />
        <ShelterContainer />
      </header>
    </div>
  );
}

export default App;
