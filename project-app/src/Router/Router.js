import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Navbar from "../components/Navbar";
import Main from '../pages/Main'
import Footer from "../components/Footer"

function AppRouter() {
  console.log(process.env)
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default AppRouter;