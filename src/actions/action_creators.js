const { 
    ADD_PROJECT,
    SET_TIME,
    TIMER_SET
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
