const React             = require('react');

const ProjectList       = require('./projects/ProjectList').default;
const TimerApp          = require('./timer/TimeApp').default;
const AddProject        = require('./projects/CreateProject').default;

const App = () => {
    return(
        <div>
            <AddProject />
            <TimerApp />
            <ProjectList />
        </div>
    )
}


export default App;
