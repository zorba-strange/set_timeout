const {
    ADD_PROJECT,
    SET_TIME,
    SAVE_TIME
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
    time: 0,
    timeInput: 0
});

const setTimeoutApp = (state=projectSeeds, action) => {
    switch( action.type ){

        case SET_TIME:
            console.log('setting time', action.timeInput);
            return  state.set('timeInput', action.timeInput);

        case SAVE_TIME:
            console.log('saving');
            return (
                state.set('time', parseInt(action.time)),
                console.log(action.time),
                console.log(state.getIn(['time'])),
                state.set('timerSet', !state.timerSet)
            );

        default:
            return state;
    }
}

export default setTimeoutApp;
