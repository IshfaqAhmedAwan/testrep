import React from 'react';

class ClockByProp extends React.Component {
  render() {
    return (
      <div>
        <h1>Clock by Props</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default ClockByProp;
