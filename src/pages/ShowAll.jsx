import React, { Component } from "react";
import { Link } from "react-router-dom";
const styles = { display: "flex", width: "100vw" };

class ShowAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tops: "",
      bottoms: "",
      shoes: "",
      accessories: "",
    };
  }

  handleTopChange = (e) => {
    let tops = this.props.getTop(e.target.value);
    tops.then((result) => {
      this.setState({
        tops: result,
      });
    });
  };
  handleBottomChange = (e) => {
    let bottoms = this.props.getBottom(e.target.value);
    bottoms.then((result) => {
      this.setState({
        bottoms: result,
      });
    });
  };
  handleShoeChange = (e) => {
    let shoe = this.props.getShoe(e.target.value);
    shoe.then((result) => {
      this.setState({
        shoes: result,
      });
    });
  };
  handleAccessoryChange = (e) => {
    let accessory = this.props.getAccessory(e.target.value);
    accessory.then((result) => {
      this.setState({
        accessories: result,
      });
    });
  };
  componentDidUpdate() {
    if (this.state.tops === "") {
      this.setState({
        tops: this.props.tops[0],
        bottoms: this.props.bottoms[0],
        shoes: this.props.shoes[0],
        accessories: this.props.accessories[0],
      });
    }
  }
  componentDidMount() {
    if (this.state.tops === "" && this.props.tops[0]) {
      this.setState({
        tops: this.props.tops[0],
        bottoms: this.props.bottoms[0],
        shoes: this.props.shoes[0],
        accessories: this.props.accessories[0],
      });
    }
  }

  render() {
    return (
      <>
        <div class="showAll" style="padding-left:100px" style={styles}>
          <label>Tops</label>
          <select
            name="top"
            defaultValue={this.props.tops[3]}
            onChange={this.handleTopChange}
          >
            {this.props.tops.map((top) => (
              <option key={top._id} value={top._id}>
                {top.name}
              </option>
            ))}
          </select>
          <Link
            className="btn btn-xs btn-info btnDetails"
            to={{
              pathname: "/top/details",
              state: { tops: this.state.tops },
            }}
          >
            details{" "}
          </Link>
          &nbsp;&nbsp;&nbsp;
          <label>Bottoms</label>
          <select
            name="bottom"
            onChange={this.handleBottomChange}
          >
            {this.props.bottoms.map((bottom) => (
              <option key={bottom._id} value={bottom._id}>
                {bottom.name}
              </option>
            ))}
          </select>
          <Link
            className="btn btn-xs btn-info btnDetails"
            to={{
              pathname: "/bottom/details",
              state: { bottoms: this.state.bottoms },
            }}
          >
            details{" "}
          </Link>
          &nbsp;&nbsp;&nbsp;
          <label>Shoes</label>
          <select
            name="shoes"
            onChange={this.handleShoeChange}
          >
            {this.props.shoes.map((shoe) => (
              <option key={shoe._id} value={shoe._id}>
                {shoe.name}
              </option>
            ))}
          </select>
          <Link
            className="btn btn-xs btn-info btnDetails"
            to={{
              pathname: "/shoe/details",
              state: { shoes: this.state.shoes },
            }}
          >
            details{" "}
          </Link>
          &nbsp;&nbsp;&nbsp;
          <label>accessories</label>
          <select
            name="accessory"
            onChange={this.handleAccessoryChange}
          >
            {this.props.accessories.map((accessory) => (
              <option key={accessory._id} value={accessory._id}>
                {accessory.name}
              </option>
            ))}
          </select>
          <Link
            className="btn btn-xs btn-info btnDetails"
            to={{
              pathname: "/accessory/details",
              state: { accessories: this.state.accessories },
            }}
          >
            details{" "}
          </Link>
        </div>
      </>
    );
  }
}

export default ShowAll;
