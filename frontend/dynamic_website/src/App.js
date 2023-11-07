import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home';
import MenuTiles from './MenuTiles';
import AboutPage from './AboutPage'
import MenuPage from './MenuPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/menu'>
              <MenuTiles />
            </Route>
            <Route exact path='/menu/:type'>
                <MenuPage />
            </Route>
            <Route exact path='/about'>
              <AboutPage />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
