const memeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEME_REDUCER':
      return action.payload
    default:
      return state;
  }
}; // End meme reducer

export default memeReducer;