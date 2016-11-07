const React                 = require('react');
const { Link }              = require('react-router');


const Project = ({project}) => {
    return (
        <div>
            {project.projectName}
        </div>
    )
}


export default Project;
