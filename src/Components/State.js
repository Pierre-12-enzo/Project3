import React, { Component } from 'react';

class State1 extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = { city: "Huye", name: "Butare" };
  }

  // Method to update state when the input changes
  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Contact us on {this.state.name} and the city is {this.state.city}</h1>

        {/* Input for entering new city */}
        <input
          type="text"
          onChange={this.handleInputChange}
          placeholder="Enter new city"
        />

        {/* Button to trigger an alert when updating */}
        <button onClick={() => alert('Information updated')}>Update Information</button>
      </div>
    );
  }
}

export default State1;
