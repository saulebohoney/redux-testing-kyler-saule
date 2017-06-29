import reducer from '../src/reducer';
import * as actions from '../src/actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: 50,
    showInfoModal: false
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

describe('reducerActions',() => {
    it ('should start the newGame',() =>{
        const currentState = {
        guesses: [3,78,90],
        feedback: 'Make your guess!',
        correctAnswer: 50,
        showInfoModal: true
    } ;
       const state=reducer(currentState,actions.newGame(50));
        expect(state).toEqual(initialState);
    });
});

