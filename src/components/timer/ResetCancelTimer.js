const React               = require('react');
const { connect }         = require('react-redux');

const {
    timeSet,
    resetTime,
    setInputTime,
    Tick,
    setTime,
}                                  = require('../../actions/action_creators');

const resetCancelTimer = ({dispatch}) => {
    return (
        <div>
            <input 
                onClick={(e) => {
                    e.preventDefalut;
                    // reset input time
                    dispatch(setInputTime(''));
                    dispatch(timeSet(false));
                    // reset tick to false
                    dispatch(Tick(false));
                }} 
                type="submit"
                value="Cancel Timer"
            />
        </div>
    )
}

const ResetCancelTimer = connect()(resetCancelTimer);
export default ResetCancelTimer;
