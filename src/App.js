import './App.css';
import CountComponent from './components/CountComponent';
import FormComponent from './components/FormComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Application</p>
        <FormComponent />
        <CountComponent />
        <ResultComponent />
      </header>
    </div>
  );
}

export default App;
