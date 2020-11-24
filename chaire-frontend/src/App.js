import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>CHAIRE</h1>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route render={() => <h1>BIG OOF AKA 404 PAGE NOT FOUND</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
