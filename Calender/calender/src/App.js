import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Calender from './Calender'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      
      <Route path="/" component={Calender}></Route>
     
      </Switch>
      
      </BrowserRouter> 
    </div>
  );
}

export default App;
