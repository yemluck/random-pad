//reducer that will hold the data that is sent from GET request triggered at "FETCH_TODO" on todolist container page
const todoList = (state=[], action) => {
    switch(action.type) {
        case 'SET_TODO_LIST': 
            return action.payload
        default:
            return state;
    }
  }; // End todoList reducer

export default todoList;
  