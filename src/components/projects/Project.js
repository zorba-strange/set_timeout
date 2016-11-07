const React                 = require('react');
const { Link }              = require('react-router');


const Project = ({project, params}) => {
    console.log('params', params);
    return (
        <div>
            {project.projectName}
        </div>
    )
}


export default Project;
