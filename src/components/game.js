import React, {Component} from "react";
import {connect} from "react-redux";
import {getRanNum, userInput, makeGuess} from "../actions";

class Game extends Component {
    componentDidMount(){
        this.props.getRanNum();
    }
    render(){
        return(
            <div>
                <h1>THis game</h1>
                <p>Random Number: {this.props.ranNum}</p>
                <input onChange={this.props.userInput} value={this.props.userGuess} type="number"/>
                <p>{this.props.msg}</p>
                <br/>
                <button onClick={this.props.makeGuess}>Make Guess</button>
                {/*<button onClick={this.props.getRanNum}>Get random Number</button>*/}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        ranNum: state.game.randomNumber,
        userGuess: state.game.userGuess,
        msg: state.game.message
    }
}

export default connect(mapStateToProps, {getRanNum: getRanNum, userInput: userInput, makeGuess: makeGuess})(Game);