import React from 'react';
// import { Link } from "react-router-dom"

function TaskNav() {
    return (
        <div className="input-group">
            <a href='/yesterday' className="input-group-text text-decoration-none" id="btnGroupAddon">Yesterday</a>
            <input type="date" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            <a href='/tomorrow' className="input-group-text text-decoration-none" id="btnGroupAddon">Tomorrow</a>
        </div>
    );
}

export default TaskNav;