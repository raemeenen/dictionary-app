import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <Dictionary defaultKeyword="book" />
      <footer className="App-footer">
        <a href="https://github.com/raemeenen/dictionary-app">Open-source code</a> by Rachel Meenen
      </footer>
    </div>
  );
}

export default App;
