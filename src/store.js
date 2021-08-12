import { createStore } from 'redux';

import contact_reducer from './reducer.js';

var store = createStore(contact_reducer +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;