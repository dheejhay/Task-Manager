import React, {Component} from 'react';
import { withRouter, apiConnection } from '../lib/functions';
import { Link } from 'react-router-dom';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: "",
            task_date: "",
            note: "",
             completed: false
        }

    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]:value})
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        let action = this.props.action
        let response

        switch (action) {
            case 'add':
                response = await apiConnection("/tasks", "POST", this.state)
                if(response.success){
                    alert('Task saved')
                } else{
                    alert(response.message)
                }
                
                break;
                case 'edit':
                    const {id} = this.props.router.params
                    response = await apiConnection("/tasks/" + id, "PUT", this.state)
                    if(response.success){
                        alert('Task edited')
                    } else{
                        alert(response.message)
                    }

                break;
            default:
                break;
        }
    }

    getFullDate = (date=null) => {
        let task_date = new Date (date)
        if(date) {
            const year = task_date.getFullYear();
            let month = task_date.getMonth();
            let day = task_date.getDate();
            if(day <= 9 ) {
                day = `0${day}`;
           }
            if (month <= 9){
                month = `0${month + 1}`
            }
            return `${year}-${month}-${day}`;
       }
        }
       

    async componentDidMount(){
        try {
            const {id} = this.props.router.params;
            const response = await apiConnection("/tasks/" + id);
            if (response.success){
                const task = { ...this.state.task,...response.data};
                this.setState({ task })
            }
        } catch (error) {
            console.log(error);
        }
    }
    render(){
        const {task, task_date, note} = this.state.task;
        return(
            <div>
                 <Link to="/">Task List</Link>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end btn-sm">
                        {this.props.action === "detail" ? 
                        <Link to={`/tasks/edit/${this.state.task._id}`} className="input-group-text text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" 
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </Link> : ""}
                    </div>

                    <form className='container'>
                        <div className="mb-3">
                            <label htmlFor="task_date" className="form-label">Date</label>
                                <input type="date"
                                className="form-control" 
                                id="task_date"
                                name="task_date"
                                onChange={(e) => this.handleChange(e)}
                                value={this.getFullDate(task_date)}
                                 />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Task</label>
                            <input type="text"
                             className="form-control" 
                             id="task" 
                             name="task" 
                             onChange={(e) => this.handleChange(e)}
                             value={task}
                             />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Note</label>
                            <textarea className="form-control" 
                             id="note" 
                             rows="3"
                             name="note"
                             onChange={(e) => this.handleChange(e)}
                             value={note}
                             ></textarea>
                        </div>
                            {this.props.action === "add" ||this.props.action === "edit" ? (
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button> ) : ( ""
                            )}
                    </form>
            </div>
        )
    }
};

export default withRouter(TaskForm);