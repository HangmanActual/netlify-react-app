import logo from './logo.svg';
import './App.css';
import SimpleCalculator from './Components/SimpleCalculator';
import './fonts/Digital7.ttf';
import './fonts/TypewriterBold.otf';

function App() {
  return (
    <div className="App">
      <div className="ComponentContainer" id="Container_SimpleCalculator">
        <SimpleCalculator />
      </div>
    </div>
  );
}

export default App;


/*
// Original Code
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
