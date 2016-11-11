const {
    ADD_PROJECT,
    SET_TIME,
    TIMER_SET, 
    COUNT_DOWN,
    TIMER_RESET,
    INPUT_PROJECT_NAME,
    ADD_SESSION,
    NEW_SESSION_INFO,
    OPTION_PROJECT_NAME

}                                       = require('../actions/ACTION_TYPES');
const Immutable                         = require('immutable');


const uid = () => Math.random().toString(34).slice(2);


const projectSeeds = Immutable.fromJS({
    projects: [
        {
            projectName: 'Seed Project',
            id: uid(),
            sessions: [
                {
                    sessionId: 1,
                    sessionInfo: "This some info about this session",
                    sessionTime: 45
                },
                {
                    sessionId: 5,
                    sessionInfo: "Another session description",
                    sessionTime: 45
                }
            ]
        },
        {
            projectName: 'Second Seed Data',
            id: uid(),
            sessions: [
                {
                    sessionId: 2,
                    sessionInfo: "Here is another piece of data",
                    sessionTime: 45
                }
            ]
        }
    ],
    timerSet: false,
    timeInput: '',
    newProject: '',
    inputSessionInfo: '',
    optionProjectName: ''
});

const setTimeoutApp = (state=projectSeeds, action) => {
    switch( action.type ){

        case INPUT_PROJECT_NAME:
            return state.set('newProject', action.projectName)

        case OPTION_PROJECT_NAME:
            return state.set('optionProjectName', action.projectName)

        case ADD_PROJECT:
            return state.updateIn(['projects'], 'not-set-value', (projects) => {
                return (
                    projects.push(Immutable.fromJS({
                        projectName: action.projectName,
                        id: uid(),
                        sessions: []
                    }))
                )
            })

        case NEW_SESSION_INFO:
            return state.set('inputSessionInfo', action.inputSessionInfo)

        case ADD_SESSION:
            console.log('reducer add_session', action.projectName)
            return state.updateIn(['projects'], 'not-set-value', (projects) => {
                if(projects.getIn(['projectName']) === action.projectName){
                    console.log('project found');
                    sessions.push(Immutable.fromJS({
                        sessionId: uid(),
                        sessionInfo: action.sessionInfo,
                        sessionTime: action.sessionTime
                    }))
                }
            })

        case SET_TIME:
            return  state.set('timeInput', action.timeInput);

        case TIMER_SET:
            return state.set('timerSet', action.timerSet)

        case TIMER_RESET:
            return  state.set('timerSet', !action.timerSet)

        case COUNT_DOWN:
                console.log(state.getIn(['timeInput']))
                return state.set('timeInput', action.time)

        default:
            return state;
    }
}

export default setTimeoutApp;
