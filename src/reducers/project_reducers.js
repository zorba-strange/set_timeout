const {
    ADD_PROJECT,
    SET_TIME,
    TIMER_SET 
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
    timeInput: ''
});

const setTimeoutApp = (state=projectSeeds, action) => {
    switch( action.type ){

        case SET_TIME:
            return  state.set('timeInput', action.timeInput);

        case TIMER_SET:
            return state.set('timerSet', action.timerSet)

        default:
            return state;
    }
}

export default setTimeoutApp;
