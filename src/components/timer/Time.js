const React                  = require('react');
const { connect }            = require('react-redux');

const { 
    countDown,
    Tick,
    setTime,
}                            = require('../../actions/action_creators');

const ResetCancelTimer             = require('./ResetCancelTimer').default;

const TimeCount = ({
    time,
    tick,
    dispatch,
    timerSet
}) => {
    if(parseInt(time) === 0){
        dispatch(Tick(!tick));
        dispatch(setTime(''));
        return(
            <div>
                {time}
            </div>
        )
    } 

    setTimeout(() => dispatch(countDown(time)), 1000) 

    return(
        <div>
            {time}
            <ResetCancelTimer key={5005} />
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

const Time = connect(mapStateToProps)(TimeCount);

export default Time;
