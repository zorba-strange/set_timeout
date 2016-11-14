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

export const countDownAsync = (time) => {
    console.log('countDown', time)
    return {
        type: COUNT_DOWN,
        time
    }
}

//     return(dispatch) => {
//         while(parseInt(time) > 0 ){
//             time--;
//             setTimeout(() => dispatch(countDown(time)), 1000)
//         }
//     }
// }

// export const countDownAsync = (time) => {
//     return(dispatch) => {
//         while(parseInt(time) != 0 ){
//             time--;
//             setInterval(() => dispatch(countDown(time)), 1000)
//         }
//     }
// }
