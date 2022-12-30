import classes from './app.module.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/homePage/homePage';
import SignInPage from './pages/signIn/signin';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
