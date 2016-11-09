const { 
    ADD_PROJECT,
    SET_TIME,
    TIMER_SET,
    TIMER_RESET,
    COUNT_DOWN,
    ADD_SESSION,
    INPUT_PROJECT_NAME,
    NEW_SESSION_INFO,
    OPTION_PROJECT_NAME

}                                 = require('./ACTION_TYPES');

export const selectProjectName = (projectName) => {
    return {
        type: OPTION_PROJECT_NAME,
        projectName
    }
}

export const addProject = (projectName) => {
    return {
        type: ADD_PROJECT,
        projectName
    }
}

export const inputProjectName = (projectName) => {
    return {
        type: INPUT_PROJECT_NAME,
        projectName
    }
}

export const addSessionInfo = (projectName, time, sessionInfo) => {
    return {
        type: ADD_SESSION,
        projectName,
        time,
        sessionInfo
    }
}

export const newSessionInfo = (inputSessionInfo) => {
    console.log(inputSessionInfo);
    return {
        type: NEW_SESSION_INFO,
        inputSessionInfo
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
        type: TIMER_RESET,
        timerSet
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
            return;
        }, 1000); 
    }
}
