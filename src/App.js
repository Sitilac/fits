import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import "./App.css";
import * as fitApi from "./utils/fitService"
import * as topApi from "./utils/topService";
import * as bottomApi from "./utils/bottomService";
import * as shoeApi from "./utils/shoeService";
import * as accessoryApi from "./utils/accessorieService";
import ShowAllOutfits from "./pages/ShowAllOutfits";
import ShowAllTops from "./pages/ShowAllTops";
import AddFitsPage from "./pages/Add/AddFitsPage"
import AddTopPage from "./pages/Add/AddTopPage/AddTop";
import AddBottomPage from "./pages/Add/AddBottomPage/AddBottom";
import AddShoePage from "./pages/Add/AddShoePage/AddShoe";
import AddAccessoryPage from "./pages/Add/AddAccessoryPage/AddAccesory";
import SignupPage from "./pages/userAuth/SignupPage";
import userService from "./utils/userService";
import LoginPage from "./pages/userAuth/LoginPage";

class App extends Component {
  state = {
    fits:[],
    tops:[],
    bottoms:[],
    shoes:[],
    accessories:[],
    selectedTop:'',
    user: userService.getUser(),
  };


  /*---Crud Add Handlers---*/
  handleAddFit = async (newFitData) => {
    const newFit = await fitApi.create(newFitData);
    this.setState(
      (state) => ({
        tops: [...state.fits, newFit],
      }),
      () => this.props.history.push("/")
    );
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
    this.setState(
      { top:newTopArray },
      () => this.props.history.push("/")
    );
  };
  handleUpdateBottom = async (updatedBottomData) => {
    const updatedBottom = await bottomApi.update(updatedBottomData);
    const newBottomArray = this.state.bottoms.map((p) =>
      p._id === updatedBottom._id ? updatedBottom : p
    );
    this.setState(
      { top:newBottomArray },
      () => this.props.history.push("/")
    );
  };
  handleUpdateShoe = async (updatedShoeData) => {
    const updatedShoe = await shoeApi.update(updatedShoeData);
    const newShoeArray = this.state.shoe.map((p) =>
      p._id === updatedShoe._id ? updatedShoe : p
    );
    this.setState(
      { top:newShoeArray },
      () => this.props.history.push("/")
    );
  };
  handleUpdateAccessory = async (updatedAccessorieData) => {
    const updatedAccessorie = await accessoryApi.update(updatedAccessorieData);
    const newAccessorieArray = this.state.accessories.map((p) =>
      p._id === updatedAccessorie._id ? updatedAccessorie : p
    );
    this.setState(
      { top:newAccessorieArray },
      () => this.props.history.push("/")
    );
  };
  /*---Crud Delete handlers---*/
  handleDeleteTop = async (id) => {
    await topApi.deleteOne(id);
    this.setState(
      (state) => ({
        // Yay, filter returns a NEW array
        tops: state.tops.filter((p) => p._id !== id),
      }),
      () => this.props.history.push("/")
    );
  };


  async componentDidMount(){
    const user = userService.getUser();
    const tops = await topApi.getAll(user);
    const shoes = await shoeApi.getAll(user);
    const bottoms = await bottomApi.getAll(user);
    const accessories = await accessoryApi.getAll(user);
    const fits = await fitApi.getAll(user);
    this.setState({fits});
    this.setState({tops});
    this.setState({bottoms});
    this.setState({accessories});
    this.setState({shoes});
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
                <NavLink exact to="/fits">
                  Outfits List
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/addTop">
                  Add Top
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/addBottom">
                  Add Bottom
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/addShoe">
                  Add Shoe
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to="/addAccessory">
                  Add Add Accessory
                </NavLink>
                &nbsp;&nbsp;&nbsp;
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
        {/* <select key="Ley"
          value={this.state.tops}
          onChange={e =>
            this.setState({
              selectedTop: e.target.value,
            })
          }
        >
          {this.state.tops.map(top => (
            <option
              key={top.id}
              value={top._id}
            >
              {top.name}
            </option>
          ))}
        </select> */}
          <Switch>
          {/* <Route
              exact
              path="/"
              render={() => (
                <Outfit
                  user={this.state.user}
                  puppies={this.state.puppies}
                  handleDeletePuppy={this.handleDeletePuppy}
                />
              )}
            /> */}
            <Route exact path="/fits" render={() => <AddFitsPage user={userService.getUser()} 
              handleAddFit={this.handleAddFit} 
              tops={this.state.tops} 
              bottoms ={this.state.bottoms} 
              shoes = {this.state.shoes} 
              accessories = {this.state.accessories}/>} />
            <Route exact path="/addTop" render={() => <AddTopPage user={userService.getUser()} handleAddTop ={this.handleAddTop}/>} />
            <Route exact path="/addBottom" render={() => <AddBottomPage user={userService.getUser()} handleAddBottom ={this.handleAddBottom}/>} />
            <Route exact path="/addShoe" render={() => <AddShoePage user={userService.getUser()} handleAddShoe ={this.handleAddShoe}/>} />
            <Route exact path="/addAccessory" render={() => <AddAccessoryPage user={userService.getUser()} handleAddAccessory ={this.handleAddAccessory}/>} />

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
