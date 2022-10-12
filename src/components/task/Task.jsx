import React from "react";
import { Message, Button } from "react-bulma-components";

const Task = ({ task, deadline }) => {
    return (
        <Message color="info" size={"full"} className="task">
            <Message.Body className="taskBody">
                <div className="taskTop">
                    <span className="is-size-5">{task}</span> <Button remove />
                </div>
                <span className="deadline is-size-7">{deadline}</span>
            </Message.Body>
        </Message>
    );
};

export default Task;
