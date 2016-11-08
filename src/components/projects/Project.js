const React                 = require('react');
const { Link }              = require('react-router');
const { connect }           = require('react-redux');

const Project = ({project, dispatch}) => {
    console.log('project', project)
    return (
        <div>
            {project}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state.sessions);
//     return {
//         sessions: state.sessions
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         projectSessions: (...args) => dispatch(projectSessions(...args))
//     }
// }

// // const Project = connect(mapStateToProps, mapDispatchToProps)(projects)
// const Project = connect(mapStateToProps)(projects)

export default Project;
