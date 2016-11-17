const {
    TICK,
    SET_TIME,
    TIMER_SET, 
    COUNT_DOWN,
    TIMER_RESET,
    RESET_INPUT_TIME,
    SET_INPUT_TIME,
    RESET_TIME,
}                                       = require('../actions/ACTION_TYPES');

const Immutable                         = require('immutable');


export const timerReducer = (state=Immutable.fromJS({
    timerSet: false,
    timeInput: '',
    time: '',
    tick: false
}), action) => {
    switch(action.type){

        case SET_TIME:
            return  state.set('time', action.timeInput)

        case SET_INPUT_TIME:
            return state.set('timeInput', action.timeInput)

        case RESET_INPUT_TIME:
            return state.set('timeInput', action.timeInput)

        case TIMER_SET:
            return state.set('timerSet', action.timerSet)

        case TIMER_RESET:
            return  state.set('timerSet', !action.timerSet)

        case COUNT_DOWN:
            return state.set('time', action.time)

        case TICK:
            return state.set('tick', action.tick)

        default:
            return state;
    }
}
