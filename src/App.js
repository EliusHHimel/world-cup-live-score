import logo from './logo.svg';
import './App.css';
import MatchList from './components/MatchList';

function App() {
  //   setInterval(() => {
  //     fetch('https://cricketapi-icc.pulselive.com/fixtures/${matchid}/scoring')
  //     .then(response => response.json())
  //     .then(data => {
  //        console.log(data.slip.advice);
  //     }
  //     );
  // }, 10000);
  return (
    <div className="App">
      <MatchList />
    </div>
  );
}

export default App;
