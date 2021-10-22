import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import LandingPage from './components/LandingPage/LandingPage'
import { Route, Switch , BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import {useSelector} from 'react-redux' 

function App() {
  const Token = useSelector(state => state.refreshToken)
  localStorage.setItem("refreshToken",localStorage.getItem('refreshToken')||"");
  localStorage.setItem("email",localStorage.getItem('email')||"");
  localStorage.setItem("_id",localStorage.getItem('_id')||"");
  localStorage.setItem("username",localStorage.getItem('username')||"");

  return (
    <div className="">
        <BrowserRouter>
            {
              Token===""? <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/GetStarted" component={GetStarted} />
              </Switch> : <Switch>
                <Route exact  path="/" component={Home} />
                <Route path="/Chat" component={Chat} />
              </Switch>
            }
        </BrowserRouter>
    </div>
  );
}

export default App;
