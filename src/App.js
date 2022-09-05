import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="book" />
      <footer className="App-footer">
        <a href="https://github.com/raemeenen/dictionary-app">Open-source code</a> by Rachel Meenen
      </footer>
    </div>
  );
}

export default App;
