import React from "react";
import { Form, Button } from "react-bulma-components";
import "./AddTask.css";

const AddTask = ({ taskList, setTaskList }) => {
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const { task, deadline } = e.target;
                    const isPast = Date.now() > new Date(deadline.value).getTime();
                    !isPast &&
                        setTaskList(
                            [
                                ...taskList,
                                {
                                    task: task.value,
                                    deadline: deadline.value.replace("T", " "),
                                    id: Date.now(),
                                    isDone: false,
                                },
                            ].sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                        );
                }}
            >
                <Form.Field>
                    <Form.Label>Task</Form.Label>
                    <Form.Control>
                        <Form.Input
                            type="text"
                            placeholder="Make a sandwich"
                            name="task"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control>
                        <Form.Input
                            type="datetime-local"
                            placeholder="Oct 14, 09:00"
                            name="deadline"
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Control>
                        <Button type="submit" color="link">
                            Add
                        </Button>
                    </Form.Control>
                </Form.Field>
            </form>
        </>
    );
};

export default AddTask;
