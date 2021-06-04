import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home1 from "./Home1";
import About from "./About";
import Contact from "./Contact";
import Serve from "./Serve";
import Login from "./Login";
import Signup from "./Signup";
import Silver from "./Silver";
import Gold from "./Gold";
import Diamond from "./Diamond";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Forget } from "./Forget";
import { AuthProvider } from "./Context/AuthContext";
import Profile from "./components/Profile/Profile";
import Cart from "./cart/Cart";
import Logout from "./components/Logout";
import UpdateCart from "./cart/UpdateCart";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/reset-password" component={Forget} />
            <Route exact path="/" component={Home1} />
            <Route path="/serve" component={Serve} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/silver" component={Silver} />
            <Route path="/diamond" component={Diamond} />
            <Route path="/gold" component={Gold} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={Cart} />
            <Route path="/orders/:id/update" component={UpdateCart} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
