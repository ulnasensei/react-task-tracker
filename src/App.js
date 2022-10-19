import "./App.css";
import "bulma/css/bulma.min.css";
import Header from "./components/header/Header";
import React, { useState, useEffect } from "react";
import AddTask from "./components/addTask/AddTask";
import { Box, Block } from "react-bulma-components";
import Tasks from "./components/tasks/Tasks";

function App() {
    const [toggle, setToggle] = useState(true);
    const [taskList, setTaskList] = useState(
        () => JSON.parse(localStorage.getItem("taskList")) || []
    );

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList]);

    return (
        <Box id="box" className="column is-two-fifths">
            <Header toggle={toggle} setToggle={setToggle} />
            {toggle && <AddTask taskList={taskList} setTaskList={setTaskList} />}
            <Block className="tasks">
                {Boolean(taskList.length) &&
                    taskList.map((task) => {
                        return <Tasks key={task.id} task={task} setTaskList={setTaskList} />;
                    })}
            </Block>
        </Box>
    );
}

export default App;
