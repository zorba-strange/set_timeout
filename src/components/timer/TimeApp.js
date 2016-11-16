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

const timerApp = ({
    timerSet,
    dispatch,
    timeInput,
    time,
    tick
}) => {
    console.log(time)
    if( parseInt(time) != 0 && !timerSet && !tick ){
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(timeSet(!timerSet));
                dispatch(setTime(timeInput));
            }}>

            <input 
                type="text"
                onChange={(e) =>  dispatch(setInputTime(e.target.value))}
                value={timeInput}
                placeholder='0:00' />
            <input 
                type="submit"
                value="Set Time" />
        </form>
        )
    }  else if( timerSet && !tick ){
        return (
            <div>
            {time}
                <form 
                    onSubmit={(e) => { 
                        e.preventDefault();
                        dispatch(Tick(tick))
                    }}>
                    <input 
                        type="submit"
                        value="Start Timer"
                    />
                </form>
                <input 
                    onClick={(e) => {
                        e.preventDefalut;
                        // this should be a timerResetSet to set the timeInput back to ''
                        dispatch(timeSet(!timerSet));
                        dispatch(setInputTime(''));
                    }} 
                    type="submit"
                    value="Reset Timer"
                />
            </div>
        )
    } else if( parseInt(time) != 0 && tick ){
        return (
            <Time key={time} />
        )
    } else {
        return (
            <div>
                <AddSession />
                <input 
                    onClick={(e) => {
                        e.preventDefalut;
                        dispatch(timerReset(timerSet));
                        dispatch(setInputTime(''));
                    }} 
                    type="submit"
                    value="Reset Timer"
                />
            </div>
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
