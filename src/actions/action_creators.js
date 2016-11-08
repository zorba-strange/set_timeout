const { 
    ADD_PROJECT,
    SET_TIME,
    TIMER_SET,
    TIMER_RESET,
    COUNT_DOWN
}                                 = require('./ACTION_TYPES');


export const addProject = (projectName) => {
    return {
        type: ADD_PROJECT,
        projectName
    }
}

export const setTime = (timeInput) => {
    return {
        type: SET_TIME,
        timeInput
    }
}

export const timerReset = (timerSet) => {
    return {
        type: TIMER_RESET
    }
}

export const timeSet = (timerSet) => {
    return {
        type: TIMER_SET,
        timerSet
    }
}

export const countDown = (time) => {
    console.log('action', time);
    return {
        type: COUNT_DOWN,
        time
    }
}

export const countDownAsync = (time) => {
    return(dispatch) => {
            while( parseInt(time) != 0 ){
                    time--;
                setTimeout(() => {
                    dispatch(countDown(time));
                }, 1000)
            }
        return;
    }
}
