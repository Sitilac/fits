import React, {Component} from 'react';

class AddTopPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      brand: '',
      price: '0',
      color: '',
      description:'',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
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
      </>
    );
  }
}

export default AddTopPage;