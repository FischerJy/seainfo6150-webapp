import React from "react";
import classes from './ArticleTextToggleButton.module.css';

const articleTextToggleButton = (props) => {
    return <button className={classes.button} onClick={props.clicked}>{props.buttonText}</button>
};

export default articleTextToggleButton;