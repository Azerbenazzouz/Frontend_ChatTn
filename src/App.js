import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import LandingPage from './components/LandingPage/LandingPage'
import { Route, Switch , BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/GetStarted" component={GetStarted} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
