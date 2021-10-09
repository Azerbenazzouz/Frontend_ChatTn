import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import LandingPage2 from './components/LandingPage/LandingPage2'
import { Route, Switch , BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Switch>
                  <Route exact path="/" component={LandingPage2} />
                  <Route path="/GetStarted" component={GetStarted} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
