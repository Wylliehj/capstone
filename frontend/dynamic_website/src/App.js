import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './Home';
import MenuTiles from './MenuTiles';
import MenuType from './MenuType';
import AboutPage from './AboutPage'


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
              <MenuType />
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
