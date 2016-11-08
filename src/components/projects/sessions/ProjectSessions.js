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
    return {
        // so this is mos def not how i want to do this but
        // it was working and i didn't want to get stuck on this all day
        project: state.getIn(['projects', ownProps.params.id])
    }
}

const Sessions = connect(mapStateToProps)(session);

export default Sessions;
