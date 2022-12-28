import classes from './app.module.css';

import Navbar from './components/navbar/navbar';
import Homepage from './pages/homePage/homePage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} /> 
      </Switch>
    </div>
  );
}

export default App;
