import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditFitPage extends Component {
  state = {
    invalidForm: false,
    formData:{
      accessory:this.props.location.state.fit.accessory._id,
      bottom:this.props.location.state.fit.bottom._id,
      top:this.props.location.state.fit.top._id,
      shoes:this.props.location.state.fit.shoes._id,
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateFit(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
    });
  };

  componentDidUpdate() {
    // if (this.state.formData.top === "") {
    //   console.log(this.props.tops);
    //   this.setState({
    //     formData: {
    //       top: this.props.tops[0],
    //       bottom: this.props.bottoms[0],
    //       shoe: this.props.shoes[0],
    //       accessory: this.props.accessories[0],
    //       user: this.props.user,
    //     },
    //   });
    // }
  }
  
  componentDidMount() {
    // if (this.state.formData.top === "" && this.props.tops[0]) {
    //   this.setState({
    //     formData: {
    //       top: this.props.tops[0],
    //       bottom: this.props.bottoms[0],
    //       shoe: this.props.shoes[0],
    //       accessory: this.props.accessories[0],
    //       user: this.props.user,
    //     },
    //   });
    // }
  }
  

  render() {

    return (
      <>
      <label>Name</label>
      <input name="name" type="text" value={this.state.formData.name} onChange={this.handleChange}></input>
      <br/>
  <label>Top</label>
    <select
          name="top"
          value={this.state.formData.tops}
          onChange={this.handleChange}
        >
          {this.props.tops.map(top => (
            <option
              key={top._id}
              value={top._id}
            >
              {top.name}
            </option>
          ))}
        </select>
        <br/>
  <label>Bottom</label>
    <select
          name="bottom"
          value={this.state.formData.bottoms}
          onChange={this.handleChange}
        >
          {this.props.bottoms.map(bottom => (
            <option
              key={bottom._id}
              value={bottom._id}
            >
              {bottom.name}
            </option>
          ))}
        </select>
        <br/>
  <label>Shoes</label>
    <select
        name="shoes"
        value={this.state.formData.shoes}
        onChange={this.handleChange}
        >
          {this.props.shoes.map(shoe => (
            <option
              key={shoe._id}
              value={shoe._id}
            >
              {shoe.name}
            </option>
          ))}
        </select>
        <br/>
  <label>Accessory</label>
    <select
         name="accessory"
         value={this.state.formData.accessories}
         onChange={this.handleChange}
        >
          {this.props.accessories.map(accessory => (
            <option
              key={accessory._id}
              value={accessory._id}
            >
              {accessory.name}
            </option>
          ))}
        </select>
        <button
         onClick= {this.handleSubmit}
         className="btn"
       >
         Save Outfit
       </button>
      </>
  );
    
  }
}

export default EditFitPage;