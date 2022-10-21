import React from "react";
import { Message, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Tasks.css";
const Tasks = ({ task, setTaskList }) => {
    const MySwal = withReactContent(Swal);
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
                setTaskList((list) =>
                    list.map((item) =>
                        task.id === item.id ? { ...item, isDone: !item.isDone } : { ...item }
                    )
                )
            }
        >
            <Message.Header className="taskHeader">
                <span>{task.deadline}</span>{" "}
                <div>
                    <Button color={"danger"}>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </span>
                    </Button>{" "}
                    <Button
                        color={"danger"}
                        onClick={() =>
                            setTaskList((list) => list.filter((item) => item.id !== task.id))
                        }
                    >
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faTrash} />
                        </span>
                    </Button>
                </div>
            </Message.Header>
            <Message.Body className="taskBody">
                <span>{task.task}</span>
            </Message.Body>
        </Message>
    );
};

export default Tasks;
