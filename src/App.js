import './App.css';
import GetStarted from './components/GetStarted/GetStarted';
import LandingPage from './components/LandingPage/LandingPage'
import { Route, Switch , BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './components/Home/Home';


function App() {
  const Token = useSelector(state => state.refreshToken)
  const State = useSelector(state => state.email)

  localStorage.setItem("refreshToken",localStorage.getItem('refreshToken')||"");  
  localStorage.setItem("email",localStorage.getItem('email')||"");  
  localStorage.setItem("_id",localStorage.getItem('_id')||"");  
  localStorage.setItem("username",localStorage.getItem('username')||"");  
  return (
    <div className="">
        <BrowserRouter>
            {
              localStorage.getItem('refreshToken')===""? <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/GetStarted" component={GetStarted} />
              </Switch> : <Switch>
                <Route exact  path="/" component={Home} />
                
              </Switch>
            }
        </BrowserRouter>
    </div>
  );
}

export default App;
