import React, { Component } from 'react';
import axios from 'axios';

export default class ResourceList extends Component {
  state = {
    resource: []
  };

  componentDidMount = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resource: response.data });
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resource: response.data });
    }
  };

  render() {
    return <div>{this.state.resource.length}</div>;
  }
}
