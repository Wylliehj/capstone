import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './home/Home';
import MenuTiles from './menu/MenuTiles';
import AboutPage from './about/AboutPage'
import MenuPage from './menu/MenuPage';


/**Much of this app is not generated in the most 'react friendly' way. The 
 * design for this app is to create a site where the housed content is dynamically
 * created, and not one that can have varying amounts of components. Because of this 
 * much of the logic and elements are hard coded in as they are specific to the 
 * site and will not change based on the dynamic content recieved.
 */

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
