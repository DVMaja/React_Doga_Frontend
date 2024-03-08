import logo from './logo.svg';
import './App.css';
import FormComponens from './komponensek/FormKomponens';
import Tablazat from './komponensek/Tablazat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kizőldítjük a földet
      </header>
      <article>
        <FormComponens />

        <Tablazat />
      </article>
    </div>
  );
}

export default App;
