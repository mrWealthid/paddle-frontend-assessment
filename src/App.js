import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
// import PageLinks from './components/PageLinks';
// import GitProfiles from './gitComponents/GitProfiles';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Homepage} />
       
      </Switch>
    </div>
  );
}

export default App;
