const {
    SET_TIME,
    TIMER_SET, 
    COUNT_DOWN,
    TIMER_RESET,
}                                       = require('../actions/ACTION_TYPES');

const Immutable                         = require('immutable');


export const timerReducer = (state=Immutable.fromJS({
    timerSet: false,
    timeInput: 0
}), action) => {
    switch(action.type){

        case SET_TIME:
            return  state.set('timeInput', action.timeInput);

        case TIMER_SET:
            return state.set('timerSet', action.timerSet)

        case TIMER_RESET:
            return  state.set('timerSet', !action.timerSet)

        case COUNT_DOWN:
            return state.set('timeInput', action.time)

        default:
            return state;
    }
}
