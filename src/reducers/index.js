import counterReducer from './counter';
import {combineReducers} from 'redux';

const rootReducers=combineReducers({
   counter: counterReducer
});

export default rootReducers;