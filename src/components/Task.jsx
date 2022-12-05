import React, {useState, useEffect} from 'react';
import TaskAction from './TaskAction';
import { Link } from 'react-router-dom';

function Task(props) {
    const [task, setTask ] = useState({completed:false})

    const handleChange = (e) => {
        if(e.target.checked === false){
            setTask({ completed: false });
        }else {
            setTask({ completed: true });
        }
    }

    return (
        <div className="container mb-3 mt-1">
            <div className="list-group">
                <label className="list-group-item d-flex gap-3">
                     <input
                     className="form-check-input flex-shrink-0 mt-3"
                     type="checkbox"
                     onChange={(e) => handleChange(e)}
                    />
                    <Link to={`/tasks/${props.task._id}`}>{props.task.task}</Link>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-sm">
                            {task.completed ? "" : <TaskAction id={props.task._id} />}
                        </div>
                </label>
            </div>
        </div> 
    );
}

export default Task;

// class Task extends Component {
//     constructor(props) {
//         super(props);

//         this.state ={
//             completed: false,
//         }
//     }
    
//      handleChange = (e) => {
//         if(e.target.checked === false){
//             this.setState({ completed: false});
//         }else {
//             this.setState({ completed: true});
//         }
//     }
    
//     render() {
//         const {_id, task } = this.props.task;
//         return (
//             <div className="container mb-3 mt-1">
//                 <div className="list-group">
//                     <label className="list-group-item d-flex gap-3">
//                     <input
//                         className="form-check-input flex-shrink-0 mt-3"
//                         type="checkbox"
//                         onChange={(e) => this.handleChange(e)}
//                     />
//                         <Link to={`/tasks/${_id}`}>{task}</Link>
//                     <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-sm">
//                         {task.completed ? "" : <TaskAction />}
//                     </div>
//                     </label>
//                 </div>
//         </div>
//             );
//     }
       
// }

// export default Task;