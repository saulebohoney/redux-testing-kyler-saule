import reducer from '../src/reducer';
import * as actions from '../src/actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: 50,
    showInfoModal: false
};

const dummyState = {
    guesses: [3,78,90],
    feedback: 'Cold!',
    correctAnswer: 50,
    showInfoModal: true
};

describe('reducerBaseCases', () => {
    it('sets the initialState when nothing is passed in', () => {
        const state = reducer(undefined, {type: 'foobar'});
        expect(state).toEqual(initialState);
    });
    
    it('returns the state when action is unknown and state is given', () => {
        const currentState = {};
        const state = reducer(currentState, {type: 'foobar'});
        expect(state).toEqual(currentState);
    });
});

describe('newGame()',() => {
    it ('should start the newGame',() =>{
        const currentState = {
            guesses: [3,78,90],
            feedback: 'Make your guess!',
            correctAnswer: 50,
            showInfoModal: true
        };
        const state=reducer(currentState,actions.newGame(50));
        expect(state).toEqual(initialState);
    });
});

describe('makeGuess()', () => {
    it('should not make a guess with invalid input', () => {
        const currentState = Object.assign({}, dummyState);

        const expectedState = Object.assign(
            {}, 
            currentState, 
            {feedback: 'Please enter a valid number'});
        const guessWithNotNumber = 
                reducer(currentState, actions.makeGuess("foobar"));
        
        expect(guessWithNotNumber).toEqual(expectedState);
    });
    
});

describe('makeGuess()', () => {
    it('should give the correct feedback and updates the state when the valid guess is made', () => {
        const currentState = Object.assign({}, dummyState);
        const usersGuess=100;
        const expectedState = Object.assign(
            {}, 
            currentState,
            {guesses:[...currentState.guesses,usersGuess],feedback: 'You\'re Ice Cold...'});
        const guessWithValidNumber = 
                reducer(currentState, actions.makeGuess(usersGuess));
        
        expect(guessWithValidNumber).toEqual(expectedState);
    });
    
});