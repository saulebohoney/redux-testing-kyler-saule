import * as actions from '../src/actions';
describe('newGame()', () => {
    it('should return the action', () => {
        const fixedNumber = 50;
        const action = actions.newGame(fixedNumber);
        expect(action.type).toEqual(actions.NEW_GAME)
        expect(action.correctAnswer).toEqual(fixedNumber);
    });
});

describe('makeGuess()',() =>{
    it('should return action', () => {
        const guess = 7;
        const action = actions.makeGuess(guess);
        expect(action.type).toEqual(actions.MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe('toggleInfoModal()',() =>{
    it('should return action', () =>{
        const action= actions.toggleInfoModal();
        expect(action.type).toEqual(actions.TOGGLE_INFO_MODAL);
    });
});