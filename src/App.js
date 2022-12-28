import classes from './app.module.css';

import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
    </div>
  );
}

export default App;
