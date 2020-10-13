import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import "./App.css";
import ShowAllOutfits from "./pages/ShowAllOutfits";
import ShowAllTops from "./pages/ShowAllTops";
import SignupPage from "./pages/SignupPage";
import userService from "./utils/userService";
import tokenService from "./utils/tokenService";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  state = {
    user: userService.getUser(),
  };

  /*--- User Auth ---*/
  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser(),
    });
    console.log(this.state.user);
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            {this.state.user ? (
              <>
                <NavLink exact to="/outfits">
                  Outfits List
                </NavLink>
                <NavLink exact to="/tops">
                  Tops List
                </NavLink>
                <Link to="" onClick={this.handleLogout}>
                  LOG OUT
                </Link>
                &nbsp;&nbsp;&nbsp;
              </>
            ) : (
              <>
                <NavLink exact to="/login">
                  LOG IN
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/signup">
                  SIGN UP
                </NavLink>
              </>
            )}
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/outfits" render={() => <ShowAllOutfits />} />
            <Route exact path="/tops" render={() => <ShowAllTops />} />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
