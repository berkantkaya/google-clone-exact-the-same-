import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
    <Router>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/search" component={Search}/>
       </Switch>
    </Router>
    </div>
  );
}

export default App;
