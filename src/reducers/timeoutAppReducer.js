const { combineReducers }                 = require('redux');
const { timerReducer }                      = require('./timerReducer');
const { projectReducers }               = require('./projectReducers');
const { sessionReducer }               = require('./sessionReducers');


const TimeoutApp = combineReducers({projectReducers, timerReducer, sessionReducer});

export default TimeoutApp;
