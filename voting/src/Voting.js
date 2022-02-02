import React, { Component } from "react";
import "./App.css";
import VotingItem from "./VotingItem";

class Voting extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    languageList: [
      "Javascript",
      "Python",
      "Go",
      "Java",
      "TypeScript",
      "Ruby",
      "Elixir",
    ],
  };

  render() {
    return (
      <div className="container">
        <h1>Vote for a language</h1>
        <div className="list-group">
          {this.state.languageList.map((language) => (
			<VotingItem name={language}/>
          ))}
        </div>
      </div>
    );
  }
}
export default Voting;
