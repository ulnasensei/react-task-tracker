import "./App.css";
import "bulma/css/bulma.min.css";
import Header from "./components/header/Header";
import React, { useState } from "react";
import AddTask from "./components/addTask/AddTask";
import { Box, Block } from "react-bulma-components";
import Tasks from "./components/tasks/Tasks";

function App() {
    const [toggle, setToggle] = useState(true);
    const [taskList, setTaskList] = useState([]);

    return (
        <Box id="box" className="column is-two-fifths">
            <Header toggle={toggle} setToggle={setToggle} />
            {toggle && <AddTask taskList={taskList} setTaskList={setTaskList} />}
            <Block className="tasks">
                {taskList.map((task) => {
                    return (
                        <Tasks
                            key={task.id}
                            task={task}
                            taskList={taskList}
                            setTaskList={setTaskList}
                        />
                    );
                })}
            </Block>
        </Box>
    );
}

export default App;
