import React, { Component } from "react";

class AddFitPage extends Component {
  state = {
    count: 0,
    invalidForm: false,
    formData: {
      name: "",
      top: "",
      bottom: "",
      shoes: "",
      accessory: "",
      user: this.props.user,
    },
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddFit(this.state.formData);
  };

  handleChange = (e) => {
    console.log("Entered");
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
    });
  };

  componentDidUpdate() {
    if (this.state.formData.top === "") {
      console.log(this.props.tops);
      this.setState({
        formData: {
          top: this.props.tops[0],
          bottom: this.props.bottoms[0],
          shoe: this.props.shoes[0],
          accessory: this.props.accessories[0],
          user: this.props.user,
        },
      });
    }
  }

  componentDidMount() {
    if (this.state.formData.top === "" && this.props.tops[0]) {
      this.setState({
        formData: {
          top: this.props.tops[0],
          bottom: this.props.bottoms[0],
          shoe: this.props.shoes[0],
          accessory: this.props.accessories[0],
          user: this.props.user,
        },
      });
    }
  }

  render() {
    return (
      <>
      <div className="mainstyling">
        <h2>ADD FIT</h2>
        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          required
        ></input>
        <br />
        <label>Top</label>
        <select
          name="top"
          value={this.state.formData.tops}
          onChange={this.handleChange}
          required={true}
        >
          {this.props.tops.map((top) => (
            <option key={top._id} value={top._id}>
              {top.name}
            </option>
          ))}
        </select>
        <br />
        <label>Bottom</label>
        <select
          name="bottom"
          value={this.state.formData.bottoms}
          onChange={this.handleChange}
        >
          {this.props.bottoms.map((bottom) => (
            <option key={bottom._id} value={bottom._id}>
              {bottom.name}
            </option>
          ))}
        </select>
        <br />
        <label>Shoes</label>
        <select
          name="shoes"
          value={this.state.formData.shoes}
          onChange={this.handleChange}
        >
          {this.props.shoes.map((shoe) => (
            <option key={shoe._id} value={shoe._id}>
              {shoe.name}
            </option>
          ))}
        </select>
        <br />
        <label>Accessory</label>
        <select
          name="accessory"
          value={this.state.formData.accessories}
          onChange={this.handleChange}
        >
          {this.props.accessories.map((accessory) => (
            <option key={accessory._id} value={accessory._id}>
              {accessory.name}
            </option>
          ))}
        </select>
        <button onClick={this.handleSubmit} className="btn">
          ADD Outfit
        </button>
        </div>
      </>
    );
  }
}

export default AddFitPage;
