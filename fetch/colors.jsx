import React from 'react';
import getColors from './model';

export default class Colors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {colors: props.colors};
  }

  search(e) {
    getColors(e.target.value, (colors) => {
      this.setState({ colors: colors});
    });
  }

  render() {
    var searchStyle = {
      width: "100%",
      fontSize: "24px",
      padding: "12px"
    }
    return <div>
      <input style={searchStyle} type="text" onKeyUp={this.search.bind(this)}/>
      {this.state.colors.map(function(color) {
      var divStyle = {
        backgroundColor: color,
        padding: "12px"
      };
      return <div style={divStyle} key={color}>{color}</div>
    })}</div>;
  }
}
