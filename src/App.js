import './App.css';
import Home from './components/Home';

function App() {

  function dayDiff(start, end) {
    let diff = 0, days = 1000 * 60 * 60 * 24;

    diff = end - start;
    return Math.floor(diff / days);
  }

  function progressPer(days) {
    return Math.floor((100 * days) / 90);
  }

  return (
    <div className="App">
      <Home progressPer={progressPer} dayDiff={dayDiff} />
    </div>
  );
}

export default App;
