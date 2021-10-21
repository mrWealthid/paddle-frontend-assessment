import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import GitHub from './components/GitHub';
import PageLinks from './components/PageLinks';

function App() {
  return (
    <div className='App'>
      {/* <PageLinks /> */}
      <Switch>
        <Route path='/' exact component={PageLinks} />
        <Route path='/homepage' component={Homepage} />
        <Route path='/github' component={GitHub} />
      </Switch>
    </div>
  );
}

export default App;
