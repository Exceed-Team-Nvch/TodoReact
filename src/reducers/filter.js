const initialState = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

 const filterReducer = (state = initialState.SHOW_ALL, action) => {
    switch (action.type) {
      case 'ACTION_FILTER_TODO':
        return action.filter;
        default:
        return state;
    }
  };

  export default filterReducer;