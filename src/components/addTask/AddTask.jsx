import React from "react";
import { Form, Button } from "react-bulma-components";

const AddTask = () => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <Form.Field>
                    <Form.Label>Task</Form.Label>
                    <Form.Control>
                        <Form.Input type="text" placeholder="Make a sandwich" required />
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control>
                        <Form.Input type="text" placeholder="Oct 14, 09:00" required />
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Control>
                        <Button color="link">Submit</Button>
                    </Form.Control>
                </Form.Field>
            </form>
        </>
    );
};

export default AddTask;
