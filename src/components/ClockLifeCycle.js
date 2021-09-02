import React from 'react';

class ClockLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
          console.log("Mount func ")
    }

  /*If the Clock component is ever removed from the DOM, React calls the 
    componentWillUnmount() lifecycle method so the timer is stopped. */
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("Unmount func ")
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }
      
    render() {
        return (
        <div>
            <h1>Clock in Life Cycle</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}


export default ClockLifeCycle;
