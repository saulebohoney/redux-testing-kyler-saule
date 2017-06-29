import reducer from '../src/reducer';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: 50,
    showInfoModal: false
};

describe('reducer', () => {
    it('sets the initialState when nothing is passed in', () => {
        const state = reducer(undefined, {type: 'foobar'});
        expect(state).toEqual(initialState);
    });
    
    it('returns the state when action is unknown and state is given', () => {
        const currentState = {};
        const state = reducer(currentState, {type: 'foobar'});
        expect(state).toEqual(currentState);
    });
})