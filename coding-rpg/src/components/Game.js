import React, { Component } from "react";
import Intro from "./pages/Intro";
import CharacterCreation from "./pages/CharacterCreation";
import Main from "./pages/Main";
import Title from "./Title";

class Game extends Component {
    constructor (props){
        super(props);
        // this.handleMain = this.handleMain.bind(this);
        // this.handleCreate = this.handleCreate.bind(this);
        this.state = {current: "Intro"}
    };
    handlePageChange = page => {
        this.setstate({current: page})
    }
    // handleCreate (){
    //     this.setstate({current: "Create"})
    // }
    // handleMain (){
    //     this.setstate({current: "Main"})
    // }
    // renderPage = () => {
    //     if (this.state.current === "Main") {
    //       return <Main />;
    //     } else if (this.state.current === "Create") {
    //       return <CharacterCreation />;
    //     } else {
    //       return <Intro />;
    //     }
    //   };
    render (){
        const {current} = this.state.current;
        let content;
        if (current === "Main"){
            // current = <Main/>;
            content = <Main onClick={this.handlePageChange} />;
        }
        else if (current === "Create")
        {
            // current = <CharacterCreation/>;
            content = <CharacterCreation onClick={this.handlePageChange} />;
        }
        else
        {
            content = <Intro/>;
        }
        return (
            <div>
        <Title/>
        {content}
        </div>
        );
        // return (
        //     <div>
        //         <Title
        //         current={this.state.current}
        //         handleChange={this.handleChange}/>
        //          {this.renderPage()}
        //     </div>
        // );
    }
}
export default Game;