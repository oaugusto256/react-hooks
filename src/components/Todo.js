import React, { Component } from 'react';

export default class Todo extends Component {
  state = {
    resource: 'posts'
  };

  render() {
    return (
      <>
        <h1>React Hooks</h1>
        <div>
          <div>
            <button onClick={() => this.setState({ resource: 'todos ' })}>
              Todos
            </button>
            <button onClick={() => this.setState({ resource: 'posts ' })}>
              Posts
            </button>
          </div>
          {this.state.resource}
        </div>
      </>
    );
  }
}
