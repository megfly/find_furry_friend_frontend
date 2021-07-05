import logo from './logo.svg';
import './App.css';
import ShelterContainer from './containers/ShelterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Animal Shelters</h3>
        <ShelterContainer />
      </header>
    </div>
  );
}

export default App;
