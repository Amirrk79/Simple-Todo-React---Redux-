import { createStore } from 'redux';
import AllReducers from './Reducers/combined';


const store = createStore(AllReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
