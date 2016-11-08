const React               = require('react');
const { connect }         = require('react-redux');
const { projectSessions }   = require('../../../actions/action_creators');


const session = ({project}) => {
    return(
        <div>
            <h1>{project.getIn(['projectName'])}</h1>
            {project.getIn(['sessions']).map(session =>{
                return (
                    <div key={session.getIn(['sessionId'])}>
                        {session.getIn(['sessionInfo'])}
                    </div>
                        )
                        })
            }
            </div>
        )
    }

    const mapStateToProps =(state, ownProps) => {
        console.log('session state', state.setIn(['projects'])['id'] );
    return {
        // This is pulling the index of the project object that is
        // passed in the route. Not sure if this is best practice or not.
        project: state.getIn(['projects', ownProps.params.index])
    }
}

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
