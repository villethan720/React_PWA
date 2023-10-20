//import logo from './logo.svg';
import './App.css';
import './components/hola';
import './components/hero';
import Hola from './components/hola';
import Welcome from './components/welcome';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <Hola/>
      <Welcome/>
      <Hero name = "Bob" superhero = "Bobby Man"/>
    </div>
  );
}

export default App;
