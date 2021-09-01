import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ProducPage from './pages/ProducPage';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProducPage />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
