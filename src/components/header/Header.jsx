import React from "react";
import AddButton from "../addButton/AddButton";
import "./Header.css";
import { Heading } from "react-bulma-components";

const Header = (props) => {
    return (
        <div className="header">
            <Heading>Task Tracker</Heading>
            <AddButton toggle={props.toggle} setToggle={props.setToggle} />
        </div>
    );
};

export default Header;
