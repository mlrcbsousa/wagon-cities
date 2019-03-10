// src/containers/city.jsx
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  render() {
    const { city, setActiveCity } = this.props;
    return (
      <div
        className="list-group-item"
        onClick={() => setActiveCity(city)}
      >
        {city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
