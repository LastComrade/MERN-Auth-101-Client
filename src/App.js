import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import PasswordRegisterScreen from "./components/screens/PasswordRegisterScreen";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="app">
        <ToastContainer position="top-right" />
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/activate-account/:registertoken"
            component={PasswordRegisterScreen}
          />
          <Route
            exact
            path="/forgot-password"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/password-reset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
