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
}                                  = require('../../actions/action_creators');


const AddSession                   = require('./AddSession').default;

const timerApp = ({
    timerSet,
    dispatch,
    timeInput,
    time
}) => {
    if( !timerSet ){
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
    } else if ( parseInt(time) === 0 ) {
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
    } else {
        return (
            <div>
                {time}
                <form 
                    onSubmit={(e) => { 
                        e.preventDefault();
                        while(parseInt(timeInput) != 0) {
                            timeInput = parseInt(timeInput) - 1;
                            dispatch(countDownAsync(timeInput))
                        }
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
    }
}


const mapStateToProps = (state) => {
    console.log(state.timerReducer.getIn(['timeInput']))
    return {
        timeInput: state.timerReducer.getIn(['timeInput']),
        timerSet: state.timerReducer.getIn(['timerSet']),
        time: state.timerReducer.getIn(['time'])
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
