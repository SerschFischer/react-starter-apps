import React, { Component } from "react";

class VotingItem extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, votes: 0 };
  }

  handleVoteButton = () => {
      this.setState({votes: this.state.votes + 1 });
  }

  render() {
    return (
      <div class="list-group-item">
        <div class="row">
          <div class="col-md-2">{this.state.votes}</div>
          <div class="col-md-8">{this.state.name}</div>
          <div class="col-md-2"><button onClick={this.handleVoteButton}>Vote</button></div>
        </div>
      </div>
    );
  }
}
export default VotingItem;