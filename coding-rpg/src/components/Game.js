// import React from "react";
import React, { Component } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Intro from "./Intro";
import CharacterCreation from "./CharacterCreation";

// function Game() {
//     return (
//         <div>
//       <header id = "title">
//         <h1>Coding RPG</h1>
//       </header>
//       <Menu/>
//       <Intro/>
//       <CharacterCreation/>
//       </div>
//     );
//   }
class Game extends Component {
    state = {
        currentPage: "Start"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Start") {
            return (
                <div>
                    <Title />
                    <Intro />
                </div>
            );
        }
        else if (this.state.currentPage === "CharCreate") {
            return (
                <div>
                    <Title />
                    <CharacterCreation />
                </div>
            );
        }
        else {
            return (
                <div>
                    <Title />
                    <Menu/>
                </div>
            );
        }
    };
    render() {
      return (
        <div>
          <Game
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
      );
    }
}
export default Game;