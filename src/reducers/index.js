import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Postsreducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: Postsreducer,
  form: formReducer
});

export default rootReducer;
