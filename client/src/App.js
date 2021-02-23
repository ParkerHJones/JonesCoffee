import { Route, Switch } from 'react-router-dom'; 
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';

const App = () => (
  <> 
    <Switch>  
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
