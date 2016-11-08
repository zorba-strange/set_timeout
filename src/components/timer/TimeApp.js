const React               = require('react');
const { connect }         = require('react-redux');
const { bindActionCreators } = require('redux');
const {
    setTime,
    saveTime
}                         = require('../../actions/action_creators');


const timerApp = ({
    time,
    timerSet,
    dispatch,
    timeInput
}) => {
    if( !timerSet ){
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(saveTime(timeInput));
            setTime({timeInput});
        }}>

        <input 
            type="text"
            onChange={(e) =>  dispatch(setTime(e.target.value))}
            value={timeInput}
            placeholder={time} />
        <input 
            type="submit"
            value="Set Time" />
    </form>
    )
    } else {
        return (
            <div>{time}</div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state.getIn(['time']))
    return {
        time: state.getIn(['time']),
        timeInput: state.getIn(['timeInput']),
        timerSet: state.getIn(['timerSet'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allActionCreators: bindActionCreators({
            setTime,
            saveTime
        }, dispatch)
    }
}


const TimerApp = connect(mapStateToProps)(timerApp);

export default TimerApp;
