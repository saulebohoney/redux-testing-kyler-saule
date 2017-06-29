export const NEW_GAME = 'NEW_GAME';
export const newGame = (fixedNumber) => ({
    type: NEW_GAME,
    correctAnswer: fixedNumber || Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});


