import React, { Component } from "react";

import { Route, Link, NavLink, Switch } from "react-router-dom";
import "./App.css";
import * as fitApi from "./utils/fitService";
import * as topApi from "./utils/topService";
import * as bottomApi from "./utils/bottomService";
import * as shoeApi from "./utils/shoeService";
import * as accessoryApi from "./utils/accessorieService";
import OutfitListPage from "./pages/OutfitList/ShowAllOutfits";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import ShowAll from "./pages/ShowAll";
import TopDetails from "./pages/Details/TopDetailsPage/TopDetails";
import BottomDetails from "./pages/Details/BottomDetailsPage/BottomDetails";
import AccessoryDetails from "./pages/Details/AccessoryDetailsPage/AccessoryDetails";
import ShoeDetails from "./pages/Details/ShoeDetailsPage/ShoeDetails";
import FitDetails from "./pages/Details/FitDetailspage/FitDetailsPage";
import AddFitsPage from "./pages/Add/AddFitsPage";
import AddTopPage from "./pages/Add/AddTopPage/AddTop";
import AddBottomPage from "./pages/Add/AddBottomPage/AddBottom";
import AddShoePage from "./pages/Add/AddShoePage/AddShoe";
import AddAccessoryPage from "./pages/Add/AddAccessoryPage/AddAccesory";
import EditTopPage from "./pages/Edit/EditTopPage/EditTopPage";
import EditShoePage from "./pages/Edit/EditShoePage/EditShoePage";
import EditBottomPage from "./pages/Edit/EditBottomPage/EditBottomPage";
import EditAccessoryPage from "./pages/Edit/EditAccessoryPage/EditAccessoryPage";
import EditFitPage from "./pages/Edit/EditFitPage/EditFitPage";
import SignupPage from "./pages/userAuth/SignupPage";
import userService from "./utils/userService";
import LoginPage from "./pages/userAuth/LoginPage";

class App extends Component {
  state = {
    fits: [],
    tops: [],
    bottoms: [],
    shoes: [],
    accessories: [],
    selectedTop: "",
    user: userService.getUser(),
    dropDownOpen: false,
  };

  handleWornFit = async (updatedFitData) => {
    const updatedFit = await fitApi.update(updatedFitData);
    const newFitArray = this.state.fits.map((p) =>
      p._id === updatedFit._id ? updatedFit : p
    );
    this.setState({ fits: newFitArray }, () => this.props.history.push("/"));
  };

  /*---Crud Add Handlers---*/
  handleAddFit = async (newFitData) => {
    const newFit = await fitApi.create(newFitData);
    this.setState(
      (state) => ({
        fits: [...state.fits, newFit],
      }),
      () => this.props.history.push("/")
    );
    window.location.reload(false);
  };

  handleAddTop = async (newTopData) => {
    const newTop = await topApi.create(newTopData);
    this.setState(
      (state) => ({
        tops: [...state.tops, newTop],
      }),
      () => this.props.history.push("/")
    );
  };
  handleAddBottom = async (newBottomData) => {
    const newBottom = await bottomApi.create(newBottomData);
    this.setState(
      (state) => ({
        bottoms: [...state.bottoms, newBottom],
      }),
      () => this.props.history.push("/")
    );
  };
  handleAddShoe = async (newShoeData) => {
    const newShoe = await shoeApi.create(newShoeData);
    this.setState(
      (state) => ({
        shoes: [...state.shoes, newShoe],
      }),
      () => this.props.history.push("/")
    );
  };
  handleAddAccessory = async (newAccessoryData) => {
    const newAccessory = await accessoryApi.create(newAccessoryData);
    this.setState(
      (state) => ({
        accessories: [...state.accessories, newAccessory],
      }),
      () => this.props.history.push("/")
    );
  };
  /*---Crud Update handlers---*/
  handleUpdateTop = async (updatedTopData) => {
    const updatedTop = await topApi.update(updatedTopData);
    const newTopArray = this.state.tops.map((p) =>
      p._id === updatedTop._id ? updatedTop : p
    );
    this.setState({ top: newTopArray }, () => this.props.history.push("/"));
  };
  handleUpdateBottom = async (updatedBottomData) => {
    const updatedBottom = await bottomApi.update(updatedBottomData);
    const newBottomArray = this.state.bottoms.map((p) =>
      p._id === updatedBottom._id ? updatedBottom : p
    );
    this.setState({ bottoms: newBottomArray }, () =>
      this.props.history.push("/")
    );
  };
  handleUpdateShoe = async (updatedShoeData) => {
    const updatedShoe = await shoeApi.update(updatedShoeData);
    const newShoeArray = this.state.shoe.map((p) =>
      p._id === updatedShoe._id ? updatedShoe : p
    );
    this.setState({ shoes: newShoeArray }, () => this.props.history.push("/"));
  };
  handleUpdateAccessory = async (updatedAccessorieData) => {
    const updatedAccessorie = await accessoryApi.update(updatedAccessorieData);
    const newAccessorieArray = this.state.accessories.map((p) =>
      p._id === updatedAccessorie._id ? updatedAccessorie : p
    );
    this.setState({ accessories: newAccessorieArray }, () =>
      this.props.history.push("/")
    );
  };
  handleUpdateWornTop = async (updatedTopData) => {
    return 0;
  };

  handleUpdateFit = async (updatedFitData) => {
    const updatedFit = await fitApi.update(updatedFitData);
    const newFitArray = this.state.fits.map((p) =>
      p._id === updatedFit._id ? updatedFit : p
    );
    this.setState({ fits: newFitArray }, () => this.props.history.push("/"));
  };

  /*---Crud Delete handlers---*/
  handleDeleteTop = async (id) => {
    await topApi.deleteOne(id);
    this.setState(
      (state) => ({
        tops: state.tops.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };
  handleDeleteBottom = async (id) => {
    await bottomApi.deleteOne(id);
    this.setState(
      (state) => ({
        bottoms: state.bottoms.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };
  handleDeleteShoe = async (id) => {
    await shoeApi.deleteOne(id);
    this.setState(
      (state) => ({
        shoes: state.shoes.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };

  handleDeleteAccessory = async (id) => {
    await accessoryApi.deleteOne(id);
    this.setState(
      (state) => ({
        accessories: state.accessories.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };

  handleDeleteFit = async (id) => {
    await fitApi.deleteOne(id);
    this.setState(
      (state) => ({
        fits: state.fits.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };

  /*---State---*/
  async componentDidMount() {
    if (this.state.user != null) {
      await Promise.all([
        topApi.getAll(this.state.user),
        shoeApi.getAll(this.state.user),
        bottomApi.getAll(this.state.user),
        accessoryApi.getAll(this.state.user),
        fitApi.getAll(this.state.user),
      ]).then((results) => {
        this.setState({
          tops: results[0],
          bottoms: results[2],
          shoes: results[1],
          accessories: results[3],
          fits: results[4],
        });
      });
    }
  }

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
                <MDBDropdown>
                  <MDBDropdownToggle caret color="primary">
                    Show
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <NavLink exact to="/fitslist">
                      <div class="dropdown-item">
                        <MDBDropdownItem class="test">
                          Outfit List
                        </MDBDropdownItem>
                      </div>
                    </NavLink>
                    <NavLink exact to="/">
                      <MDBDropdownItem>Show All Pieces</MDBDropdownItem>
                    </NavLink>
                  </MDBDropdownMenu>
                </MDBDropdown>
                &nbsp;&nbsp;&nbsp;
                <MDBDropdown>
                  <MDBDropdownToggle caret color="primary">
                    Add New
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <NavLink exact to="/fits">
                      <MDBDropdownItem>Add Outfit</MDBDropdownItem>
                    </NavLink>
                    <NavLink exact to="/addTop">
                      <MDBDropdownItem>Add Top</MDBDropdownItem>
                    </NavLink>
                    <NavLink exact to="/addBottom">
                      <MDBDropdownItem>Add Bottom</MDBDropdownItem>
                    </NavLink>
                    <NavLink exact to="/addShoe">
                      <MDBDropdownItem>Add Shoe</MDBDropdownItem>
                    </NavLink>
                    <NavLink exact to="/addAccessory">
                      <MDBDropdownItem>Add Accessory</MDBDropdownItem>
                    </NavLink>
                  </MDBDropdownMenu>
                </MDBDropdown>
                &nbsp;&nbsp;&nbsp;
                <Link class="btn btn-primary" to="" onClick={this.handleLogout}>
                  LOG OUT
                </Link>
                &nbsp;&nbsp;&nbsp;
              </>
            ) : (
              <>
                <NavLink class="btn btn-primary login-style" exact to="/login">
                  LOG IN
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink class="btn btn-primary login-style" exact to="/signup">
                  SIGN UP
                </NavLink>
              </>
            )}
          </nav>
          <div class="logo">
            <h1>Fitz</h1>
          </div>
        </header>
        <main>
          <Switch>
            {this.state.user ? (
              <Route
                exact
                path="/"
                render={() => (
                  <ShowAll
                    tops={this.state.tops}
                    bottoms={this.state.bottoms}
                    shoes={this.state.shoes}
                    accessories={this.state.accessories}
                    getTop={topApi.getOne}
                    getBottom={bottomApi.getOne}
                    getAccessory={accessoryApi.getOne}
                    getShoe={shoeApi.getOne}
                  />
                )}
              />
            ) : (
              <Route exact path="/">
                <h1>Welcome to Fits</h1>
              </Route>
            )}
            <Route
              exact
              path="/fitslist"
              render={() => (
                <OutfitListPage
                  user={this.state.user}
                  fits={this.state.fits}
                  handleDeleteFit={this.handleDeleteFit}
                />
              )}
            />
            <Route
              exact
              path="/bottom/details"
              render={({ location }) => (
                <BottomDetails
                  handleDeleteBottom={this.handleDeleteBottom}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/shoe/details"
              render={({ location }) => (
                <ShoeDetails
                  handleDeleteShoe={this.handleDeleteShoe}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/accessory/details"
              render={({ location }) => (
                <AccessoryDetails
                  handleDeleteAccessory={this.handleDeleteAccessory}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/top/details"
              render={({ location }) => (
                <TopDetails
                  handleDeleteTop={this.handleDeleteTop}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/fit/details"
              render={(location) => <FitDetails location={location} />}
            ></Route>
            <Route
              exact
              path="/fits"
              render={() => (
                <AddFitsPage
                  user={userService.getUser()}
                  handleAddFit={this.handleAddFit}
                  tops={this.state.tops}
                  bottoms={this.state.bottoms}
                  shoes={this.state.shoes}
                  accessories={this.state.accessories}
                />
              )}
            />
            <Route
              exact
              path="/addTop"
              render={() => (
                <AddTopPage
                  user={userService.getUser()}
                  handleAddTop={this.handleAddTop}
                />
              )}
            />
            <Route
              exact
              path="/addBottom"
              render={() => (
                <AddBottomPage
                  user={userService.getUser()}
                  handleAddBottom={this.handleAddBottom}
                />
              )}
            />
            <Route
              exact
              path="/addShoe"
              render={() => (
                <AddShoePage
                  user={userService.getUser()}
                  handleAddShoe={this.handleAddShoe}
                />
              )}
            />
            <Route
              exact
              path="/addAccessory"
              render={() => (
                <AddAccessoryPage
                  user={userService.getUser()}
                  handleAddAccessory={this.handleAddAccessory}
                />
              )}
            />
            <Route
              exact
              path="/editTop"
              render={({ location }) => (
                <EditTopPage
                  handleUpdateTop={this.handleUpdateTop}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/editShoe"
              render={({ location }) => (
                <EditShoePage
                  handleUpdateShoe={this.handleUpdateShoe}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/editBottom"
              render={({ location }) => (
                <EditBottomPage
                  handleUpdateBottom={this.handleUpdateBottom}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/editAccessory"
              render={({ location }) => (
                <EditAccessoryPage
                  handleUpdateAccessory={this.handleUpdateAccessory}
                  location={location}
                />
              )}
            />
            <Route
              exact
              path="/editFit"
              render={({ location }) => (
                <EditFitPage
                  handleUpdateFit={this.handleUpdateFit}
                  location={location}
                  tops={this.state.tops}
                  bottoms={this.state.bottoms}
                  shoes={this.state.shoes}
                  accessories={this.state.accessories}
                />
              )}
            />

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
