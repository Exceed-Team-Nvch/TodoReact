import axios from "axios";
import { BASE_URL } from "../components/TodoList";

export const ACTION_ADD_TODO = "ACTION_ADD_TODO";
export const ACTION_FETCH_TODOS = "ACTION_FETCH_TODOS";
export const ACTION_DELETE_TODO = "ACTION_DELETE_TODO";
export const ACTION_TOGGLE_TODO = "ACTION_TOGGLE_TODO";
export const ACTION_EDIT_TODO = "ACTION_EDIT_TODO";
export const ACTION_FILTER_TODO = 'ACTION_FILTER_TODO';
export const ACTION_DELETE_ALL_TODOS = 'ACTION_DELETE_ALL_TODOS';

export const deleteAllTodos = (array) => {
  return function deleteAllTodos(dispatch) {
   async function deletingArray ()  { 
    return array.filter((task) => {
       if (task.isDone) {
        axios.delete(`${BASE_URL}/${task._id}`);
       } else {
        return task;
       }
     })};
     deletingArray().then((res) => {
       console.log(res);
       dispatch({ type: ACTION_DELETE_ALL_TODOS, res });
     });
  }
}

export const filterTodo = (filter) => ({

  type: ACTION_FILTER_TODO,
  filter: filter

});

export const addTodo = (value) => {
  let isLoading = true;
  isLoading? console.log('loading started'): console.log('loading is not started');
  return function addTodo(dispatch) {
    return axios.post(BASE_URL, { text: value, isDone: false }).then(
      (result) => {
        dispatch({ type: ACTION_ADD_TODO, task: result.data.data });
        isLoading = false;
        !isLoading ? console.log('loading is over'): console.log('something gone wrong');
      },
      (failue) => {
        isLoading = false;
        !isLoading ? console.log('loading is over'): console.log('something gone wrong');
      }
    );
  };
};

export const toggleTodo = (id) => {
  return function toggleTodo(dispatch) {
    dispatch({ type: ACTION_TOGGLE_TODO, id });
    return axios.put(`${BASE_URL}/${id}`).then(
      (result) => {},
      (failure) => {
        dispatch({ type: ACTION_TOGGLE_TODO, id });
      }
    );
  };
};

export const deleteTodo = (id) => {
  return function deleteTodo(dispatch) {
    return axios.delete(`${BASE_URL}/${id}`).then(
      (result) => {
        dispatch({ type: ACTION_DELETE_TODO, id });
      },
      (failure) => {}
    );
  };
};

export const downloadTodos = () => {
  return function downloadTodos(dispatch) {
    return axios.get(BASE_URL).then(
      (result) => {
        dispatch({ type: ACTION_FETCH_TODOS, task: result.data.data });
      },
      (failure) => {
        console.log("fail");
      }
    );
  };
};

export const editTodo = (value, id) => ({
  type: ACTION_EDIT_TODO,
  value: value,
  id: id,
});
