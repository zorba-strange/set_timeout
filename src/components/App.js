const React             = require('react');

const ProjectList       = require('./projects/ProjectList').default;
const TimerApp          = require('./timer/TimeApp').default;

const App = () => {
    return(
        <div>
            <TimerApp />
            <ProjectList />
        </div>
    )
}


export default App;
