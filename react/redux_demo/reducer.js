import {VisibilityFilters } from 'actions';
const initialState = {
  VisibilityFilter: VisibilityFilters.SHOW_ALL,
  todos:[]
};

function todos(state = [], action){
   switch (action.type){
    case ADD_TODO:
      return [...state.todos, {text: action.text, completed: false}];
    case COMPLETE_TODO:
      return [
        ...state.todos.slice(0,action.index),
        Object.assign({}, state[action.index], {completed: true}),
        ..state.slice(action.index + 1)
       ]
    default:
      return state;
   }
}

function todoApp(state = initialState,action){
  switch (action.type){
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {VisibilityFilter: action.filter});
    case ADD_TODO:
    case COMPLETE_TODO:
      return Object.assign({}, state,{
        todos:todos(state.todos,action)
      })
    default:
      return state;
  }
}