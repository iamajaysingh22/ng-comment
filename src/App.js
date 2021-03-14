import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="./">
            <img src={logo} alt="logo" width="40" /> Ajay Singh
          </a>
        </nav>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <hr />
        </div>
        <Switch>
          <Route exact path="/comment">
            <Table />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
