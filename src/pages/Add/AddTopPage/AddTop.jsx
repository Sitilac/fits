import React, {Component} from 'react';

class AddTopPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name:'',
      brand: '',
      price: '0',
      color: '',
      description:'',
      timesWorn:0,
      lastTimeWorn: new Date(),
      user:this.props.user,
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTop(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
      <div className="mainstyling">
      <h2>ADD TOP</h2>
      <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name(required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <input
              className="form-control"
              name="brand"
              value={this.state.formData.brand}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              value={this.state.formData.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              className="form-control"
              name="color"
              value={this.state.formData.color}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD TOP
          </button>
        </form>
        </div>
      </>
    );
  }
}

export default AddTopPage;