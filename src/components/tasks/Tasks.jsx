import React, { useState } from "react";
import { Message, Button } from "react-bulma-components";
import "./Tasks.css";
const Tasks = ({ task, deadline }) => {
    const [done, setDone] = useState(false);
    const taskStyle = {
        textDecoration: done ? "line-through" : "none",
    };
    return (
        <Message
            color={done ? "success" : "link"}
            style={taskStyle}
            size={"full"}
            className="task"
            onClick={() => setDone((current) => !current)}
        >
            <Message.Header className="taskHeader">
                <span>{deadline}</span>{" "}
                <Button
                    remove
                    onClick={(e) => {
                        e.target.parentNode.parentNode.remove();
                    }}
                />
            </Message.Header>
            <Message.Body className="taskBody">
                <span>{task}</span>
            </Message.Body>
        </Message>
    );
};

export default Tasks;
