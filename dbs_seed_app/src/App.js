import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import TransactionHistory from './components/TransactionHistory';
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/Home" exact component={Home} />
    <Route path="/TransactionHistory" exact component={TransactionHistory} />
     {/* <Home/> */}
     {/* <TransactionHistory/> */}
     <br></br>
     
    </div>
    </Router>
  );
}

export default App;
