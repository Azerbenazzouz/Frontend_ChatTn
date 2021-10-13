import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import LandingPage from './components/LandingPage/LandingPage'
import { Route, Switch , BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ChatHome from './components/Chat/chatHome';

function App() {
  const Token = useSelector(state => state.refreshToken)

  return (
    <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Token===""?LandingPage:ChatHome} />
            <Route path="/GetStarted" component={GetStarted} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
