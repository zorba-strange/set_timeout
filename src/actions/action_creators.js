const { 
    ADD_PROJECT,
    SET_TIME,
    TIMER_SET,
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
        setTimeout(() => {
            while( parseInt(time) != 0 ){
                time--;
                dispatch(countDown(time));
            }
        }, 1000)
        return;
    }
}
