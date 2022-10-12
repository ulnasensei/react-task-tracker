import React from "react";
import { Button } from "react-bulma-components";

const AddButton = (props) => {
    return (
        <>
            <Button
                color="danger"
                className="btn"
                onClick={() => props.setToggle((current) => !current)}
            >
                {props.toggle ? "Close Add Task Bar" : "Open Add Task Bar"}
            </Button>
        </>
    );
};

export default AddButton;
