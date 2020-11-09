const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTION_DELETE_ALL_TODOS':
        return action.res;

      case 'ACTION_ADD_TODO':
        return [...state, action.task ];

      case 'ACTION_FETCH_TODOS':
        return [...state].concat(action.task);

      case 'ACTION_DELETE_TODO':
        return  state.filter(todo => todo._id !== action.id);

      case 'ACTION_TOGGLE_TODO':
        return  state.map(todo => {
            if (todo._id === action.id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
      case 'ACTION_EDIT_TODO':
          return state.map(todo => {
            if (todo._id === action.id) {
                todo.text = action.value;
            }
            return todo;
        });
      
        default:
        return state;
    }
  };

  export default todoReducer;