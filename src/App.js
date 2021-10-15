import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import LandingPage from './components/LandingPage/LandingPage'
import { Route, Switch , BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './components/Home/Home';

function App() {
  const Token = useSelector(state => state.refreshToken)
  return (
    <div className="">
        <BrowserRouter>
            {
              Token===""? <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/GetStarted" component={GetStarted} />
              </Switch> : <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            }
        </BrowserRouter>
    </div>
  );
}

export default App;
