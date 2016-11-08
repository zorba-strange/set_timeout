const React           = require('react');
const { connect }     = require('react-redux');
const { Link }        = require('react-router');
const Project         = require('./Project').default;

const projectList = ({projects, dispatch}) => {
    return(
        <div>{projects.map(project => {
            console.log('project', project.getIn(['id']));
            return(
                <Link 
                    to={`${project.getIn(['id'])}`}
                    key={project.getIn(['id'])}
                >
                    <Project 
                        key={project.getIn(['id'])}
                        project={project.getIn(['projectName'])} />
                </Link>
            )
        })
        }
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.getIn(['projects'])
    }
}

const ProjectList = connect(mapStateToProps)(projectList);


export default ProjectList;
