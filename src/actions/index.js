import types from "./types";

export function getRanNum(){
    return{
        type: types.GET_RAN_NUM,
        payload: Math.floor(Math.random() * 10) + 1
    }
}

export function userInput(event){
    return {
        type: types.USER_INPUT,
        payload: event.target.value
    }
}

export function makeGuess(){
    return{
        type: types.MAKE_GUESS,
    }
}