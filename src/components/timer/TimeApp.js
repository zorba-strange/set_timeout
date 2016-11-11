const React                        = require('react');
const { connect }                  = require('react-redux');
const { bindActionCreators }       = require('redux');
const {
    setTime,
    timeSet,
    timerReset,
    countDownAsync
}                                  = require('../../actions/action_creators');

const AddSession                   = require('./AddSession').default;

const timerApp = ({
    timerSet,
    dispatch,
    timeInput
}) => {
    if( !timerSet ){
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(timeSet(!timerSet));
            setTime({timeInput});
        }}>

        <input 
            type="text"
            onChange={(e) =>  dispatch(setTime(e.target.value))}
            value={timeInput}
            placeholder='0:00' />
        <input 
            type="submit"
            value="Set Time" />
    </form>
    )
    } else if ( parseInt(timeInput) === 0 ) {
        return (
            <div>
                <AddSession />
                <input 
                    onClick={(e) => {
                        e.preventDefalut;
                        dispatch(timerReset(timerSet));
                    }} 
                    type="submit"
                    value="Reset Timer"
                />
            </div>
        )
    } else {
        return (
            <div>
                {timeInput}
                <form 
                    onSubmit={(e) => { 
                        e.preventDefault();
                        dispatch(countDownAsync(timeInput));
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
        timeInput: state.getIn(['timeInput']),
        timerSet: state.getIn(['timerSet'])
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
