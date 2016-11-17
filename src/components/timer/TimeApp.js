const React                        = require('react');
const { connect }                  = require('react-redux');
const { bindActionCreators }       = require('redux');
const {
    setTime,
    timeSet,
    timerReset,
    countDownAsync,
    resetTime,
    setInputTime,
    Tick,
}                                  = require('../../actions/action_creators');


const AddSession                   = require('./AddSession').default;
const Time                         = require('./Time').default;
const SetTimeOnTimer               = require('./SetTime').default;
const StartResetDisplayTime        = require('./StartResetDisplayTime').default;
const ResetCancelTimer             = require('./ResetCancelTimer').default;


const timerApp = ({
    timerSet,
    dispatch,
    timeInput,
    time,
    tick
}) => {
        if( !timerSet && !tick && parseInt(time) != 0 ){
            return (
                <SetTimeOnTimer key={1001} />
            )
        }  else if( timerSet && !tick ){
            return (
                <StartResetDisplayTime key={2002} />
            )
        } else if( parseInt(time) != 0 && tick ){
            return (
                <Time key={time} />
            )
        } else {
            return(
                <AddSession key={3003} />
            )
        }
}



const mapStateToProps = (state) => {
    return {
        timeInput: state.timerReducer.getIn(['timeInput']),
        timerSet: state.timerReducer.getIn(['timerSet']),
        time: state.timerReducer.getIn(['time']),
        tick: state.timerReducer.getIn(['tick'])
    }
}

// Not sue why but i still can't figure out how mapDispatchToProps works
// const mapDispatchToProps = (dispatch) => {
//     return {
//         allActionCreators: bindActionCreators({
//             setTime,
//             saveTime
//         }, dispatch)
//     }
// }


const TimerApp = connect(mapStateToProps)(timerApp);

export default TimerApp;
