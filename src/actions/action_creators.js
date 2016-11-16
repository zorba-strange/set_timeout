const { 
    ADD_PROJECT,
    SET_TIME,
    TIMER_SET,
    TIMER_RESET,
    COUNT_DOWN,
    RESET_INPUT_TIME,
    ADD_SESSION,
    INPUT_PROJECT_NAME,
    NEW_SESSION_INFO,
    OPTION_PROJECT_NAME,
    SET_INPUT_TIME,
    RESET_INPUT_PROJECT_NAME,
    RESET_SESSION_INFO,

}                                 = require('./ACTION_TYPES');

export const selectProjectName = (projectName) => {
    return {
        type: OPTION_PROJECT_NAME,
        projectName
    }
}

export const resetInputProjectName = (projectName) => {
    return {
        type: RESET_INPUT_PROJECT_NAME,
        projectName
    }
}

export const resetSessionInfo = (inputSessionInfo) => {
    return {
        type: RESET_SESSION_INFO,
        inputSessionInfo
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

export const addSessionInfo = (inputSessionInfo, optionProjectName) => {
    console.log('action OPN', optionProjectName);
    return {
        type: ADD_SESSION,
        inputSessionInfo,
        optionProjectName,
    }
}

export const newSessionInfo = (inputSessionInfo) => {
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

export const resetTime = (timeInput) => {
    return {
        type: RESET_INPUT_TIME,
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

export const setInputTime = (timeInput) => {
    console.log('action time', timeInput);
    return {
        type: SET_INPUT_TIME,
        timeInput
    }
}

export const countDownTest = (time) => {
    return {
        type: COUNT_DOWN,
        time: parseInt(time) - 1
    }
}

export const countDownAsync = (time) => {
    return(dispatch, getState) => {
        console.log('action called', time);
            if( parseInt(time) === 0 ) {
                return setTime(time);
            } else {
                return new Promise((then) =>
                dispatch(countDownTest(time)).then(() => console.log('hello'))
                )
            }
            return (
                dispatch(countDownAsync(getState().timerReducer.getIn(['time'])))
            )
    } 
}
