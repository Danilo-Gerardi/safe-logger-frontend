import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './pages/SignIn';
import SignInBusiness from './pages/SignInBusiness';
import SignUp from './pages/SignUp';
import SignUpBusiness from './pages/SignUpBusiness';
import Home from './pages/Home';
import HomeBusiness from './pages/HomeBusiness';
import Logs from './pages/Logs';
import { AuthProvider } from './providers/auth';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signin/business" component={SignInBusiness} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/home/business" component={HomeBusiness} />
            <Route path="/home" exact component={Home} />
            <Route path="/signup/business" component={SignUpBusiness} />
            <Route path="/logs" component={Logs} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
