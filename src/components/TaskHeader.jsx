import React from 'react';

function TaskHeader() {
    return (
        <div>
            <div className="input-group mb-3">
                <div className="list-group">
                    <label className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" />
                                All Tasks
                    </label>
                </div>
                <div className="input group justify-content-md-end btn-sm">
                    <a href='/tasks/add' className="btn btn-primary" type="button" id="button-addon2">Add Task</a>
                 </div>
            </div>
       </div>
    );
}

export default TaskHeader;