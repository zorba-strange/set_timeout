const React               = require('react');
const { connect }         = require('react-redux');

const {
    timeSet,
    timerReset,
    resetTime,
    setInputTime,
    Tick,
}                                  = require('../../actions/action_creators');


const ResetCancelTimer             = require('./ResetCancelTimer').default;

const startResetDisplayTime = ({
    time, 
    tick, 
    timerSet, 
    dispatch
}) => {
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
            <ResetCancelTimer key={4004} />
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

const mapStateToProps = (state) => {
    return {
        time: state.timerReducer.getIn(['time']),
        tick: state.timerReducer.getIn(['tick']),
        timerSet: state.timerReducer.getIn(['timerSet'])
    }
}

const StartResetDisplayTime = connect(mapStateToProps)(startResetDisplayTime);


export default StartResetDisplayTime;



