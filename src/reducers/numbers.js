const numbers = (state = { number: 0 }, action) => {
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + action.amount };
    case 'MINUS':
      return { number: state.number - action.amount };
    case 'SET':
      return { number: action.amount };
    default:
      return state
  }
}
  
export default numbers