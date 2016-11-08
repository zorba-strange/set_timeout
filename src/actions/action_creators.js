const { 
    ADD_PROJECT,
    SET_TIME,
    SAVE_TIME
}                                 = require('./ACTION_TYPES');


export const addProject = (projectName) => {
    return {
        type: ADD_PROJECT,
        projectName
    }
}

export const setTime = (timeInput) => {
    console.log(timeInput);
    return {
        type: SET_TIME,
        timeInput
    }
}

export const saveTime = (time) => {
    console.log('action', time);
    return {
        type: SAVE_TIME,
        time
    }
}
