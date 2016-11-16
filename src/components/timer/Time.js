const React                  = require('react');
const { connect }            = require('react-redux');

const { countDownTest }    = require('../../actions/action_creators');

const TimeCount = ({
    time,
    dispatch
}) => {
    setTimeout(() => dispatch(countDownTest(time)), 1000) 
    return(
        <div>
            {time}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        time: state.timerReducer.getIn(['time'])
    }
}

const Time = connect(mapStateToProps)(TimeCount);

export default Time
