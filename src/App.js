import logo from './logo.svg';
import './App.css';
import Forms from './MainComponents/Forms'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Meme Generator</h1>
      </header>
      <Forms />
    </div>
  );
}

export default App;
