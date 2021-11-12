import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Logs from './pages/Logs';
import { AuthProvider } from './providers/auth';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/logs" component={Logs} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
