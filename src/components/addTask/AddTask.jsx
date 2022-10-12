import React, { useState } from "react";
import { Form, Button } from "react-bulma-components";
import "./AddTask.css";

const AddTask = ({ setInput, setAddClick }) => {
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState("");
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setInput({ task: task, deadline: deadline });
                    setAddClick(true);
                }}
            >
                <Form.Field>
                    <Form.Label>Task</Form.Label>
                    <Form.Control>
                        <Form.Input
                            type="text"
                            placeholder="Make a sandwich"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control>
                        <Form.Input
                            type="text"
                            placeholder="Oct 14, 09:00"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            required
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Control>
                        <Button color="link">Add</Button>
                    </Form.Control>
                </Form.Field>
            </form>
        </>
    );
};

export default AddTask;
