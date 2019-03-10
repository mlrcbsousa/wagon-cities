// src/containers/city.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const { activeCity } = this.props;
    if (activeCity) {
      const { address, name, slug } = activeCity;
      const src = `https://kitt.lewagon.com/placeholder/cities/${slug}`;

      return (
        <div className="active-city">
          <h3>{name}</h3>
          <p>{address}</p>
          <img src={src} alt="" style={{ width: '100%' }} />
        </div>
      );
    }
    return (
      <div className="active-city">
        <h3>Select a City</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
