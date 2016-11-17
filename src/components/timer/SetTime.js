const React                        = require('react');
const { connect }                  = require('react-redux');

const {
    setTime,
    timeSet,
    setInputTime,
}                                  = require('../../actions/action_creators');

const setTimeOnTimer = ({
    timeInput, 
    timerSet,
    dispatch,
}) => {
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
};

const mapStateToProps = (state) => {
    return {
        timeInput: state.timerReducer.getIn(['timeInput']),
        timerSet: state.timerReducer.getIn(['timerSet'])
    }
};

const SetTimeOnTimer = connect(mapStateToProps)(setTimeOnTimer);


export default SetTimeOnTimer;
