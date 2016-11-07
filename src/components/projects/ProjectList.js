const React           = require('react');
const { connect }     = require('react-redux');
const { Link }        = require('react-router');
const Project         = require('./Project').default;

const projectList = ({projects}) => {
    return(
        <div>{projects.map(project => {
            console.log('project', project);
            return(
                <Link 
                    to={`${project.id}`}
                    key={project.id}
                >
                    <Project 
                        key={project.id}
                        project={project} />
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
