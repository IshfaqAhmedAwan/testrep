import React from 'react';

class ClockByState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
  render() {
    return (
      <div>
        <h1>Clock by State</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default ClockByState;
