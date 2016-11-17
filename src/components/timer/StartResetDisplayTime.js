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
                    dispatch(Tick(true))
                }}>
                <input 
                    type="submit"
                    value="Start Timer"
                />
            </form>
            <ResetCancelTimer key={4004} />
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



