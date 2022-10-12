import "./App.css";
import "bulma/css/bulma.min.css";
import Header from "./components/header/Header";
import React, { useState } from "react";
import AddTask from "./components/addTask/AddTask";
import { Box, Block } from "react-bulma-components";
import Tasks from "./components/tasks/Tasks";

function App() {
    const [toggle, setToggle] = useState(true);

    return (
        <Box id="box">
            <Header toggle={toggle} setToggle={setToggle} />
            {toggleAddTask(toggle)}
            <Block className="tasks">{addTask("test task", "tomorrow")}</Block>
        </Box>
    );
}

function toggleAddTask(status) {
    if (status) {
        return <AddTask />;
    }
}
function addTask(task, deadline) {
    return <Tasks task={task} deadline={deadline} />;
}

export default App;
