import "./App.css";
import "bulma/css/bulma.min.css";
import Header from "./components/header/Header";
import React, { useState } from "react";
import AddTask from "./components/addTask/AddTask";
import { Box, Block } from "react-bulma-components";
import Tasks from "./components/tasks/Tasks";

const taskList = [];
function App() {
    const [toggle, setToggle] = useState(true);
    const [input, setInput] = useState({ task: "", deadline: "" });
    const [addClick, setAddClick] = useState(false);

    if (addClick) {
        taskList.push(input);
        console.log(taskList.sort((a, b) => new Date(b.deadline) - new Date(a.deadline)));
        setAddClick(() => false);
        console.log(taskList);
    }

    return (
        <Box id="box" className="column is-two-fifths">
            <Header toggle={toggle} setToggle={setToggle} />
            {toggle ? <AddTask setInput={setInput} setAddClick={setAddClick} /> : null}
            <Block className="tasks">
                {taskList
                    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                    .map((task) => {
                        return <Tasks key={task} task={task} />;
                    })}
            </Block>
        </Box>
    );
}

export default App;
