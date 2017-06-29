import * as actions from '../src/actions';

describe('newGame()', () => {
    it('should return the action', () => {
        const fixedNumber = 50;
        const action = actions.newGame();
        expect(action.type).toEqual(actions.NEW_GAME)
        expect(action.correctAnswer).toEqual(fixedNumber)
    });
});