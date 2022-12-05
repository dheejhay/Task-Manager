import React, { Component } from 'react';
import Task from './Task';
import TaskHeader from './TaskHeader';
import TaskNav from './TaskNav';
import { withRouter, apiConnection} from '../lib/functions'

class TaskList extends Component {
    state = {
        tasks: []
    }
    async componentDidMount(){
        const response = await apiConnection("/tasks");
        if(response.success) {
            this.setState({
                tasks: response.data,
            })
        }
    }

    render() {
        return (
            <div className='row'>
                <h1>Task List</h1>
                <TaskNav />
                <TaskHeader />
                 {this.state.tasks.map((task) => (
                     <Task
                        key={task._id}
                        task={task}
                        />
                 ))}
            </div>
        );
    }
}

export default TaskList;