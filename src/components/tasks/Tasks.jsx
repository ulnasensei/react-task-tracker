import React from "react";
import { Message, Button } from "react-bulma-components";
import "./Tasks.css";
const Tasks = ({ task, taskList, setTaskList }) => {
    const taskStyle = {
        textDecoration: task.isDone ? "line-through" : "none",
    };
    return (
        <Message
            color={task.isDone ? "success" : "link"}
            style={taskStyle}
            size={"full"}
            className="task"
            onClick={() =>
                setTaskList(
                    taskList.map(
                        (item) => task.id === item.id && [...{ ...item, isDone: !item.isDone }]
                    )
                )
            }
        >
            <Message.Header className="taskHeader">
                <span>{task.deadline}</span>{" "}
                <Button
                    remove
                    // onClick={() =>
                    //     setTaskList(taskList.filter((item) => item.id !== task.id && item))
                    // }
                />
            </Message.Header>
            <Message.Body className="taskBody">
                <span>{task.task}</span>
            </Message.Body>
        </Message>
    );
};

export default Tasks;
