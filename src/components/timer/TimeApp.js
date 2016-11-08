const React               = require('react');
const { connect }         = require('react-redux');
const { bindActionCreators } = require('redux');
const {
    setTime,
    timeSet
}                         = require('../../actions/action_creators');


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
    } else {
        return (
            <div>
                {timeInput}
                <form 
                    onSubmit={(e) => { 
                        e.preventDefault();
                        console.log('submitting');
                    }}>
                    <input 
                        type="submit"
                        value="Start Timer"
                    />
                </form>
                    <input 
                        onClick={(e) => {
                            e.preventDefalut;
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
