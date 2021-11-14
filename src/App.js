import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Test from './components/Test';
import "./App.css";

export const history = createBrowserHistory();

function NotFound() {
  return <h1>404 Page Not Found</h1>
}

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Test} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
