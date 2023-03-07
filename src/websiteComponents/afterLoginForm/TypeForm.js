import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import {Confirm} from "../afterLoginForm/Confirm";



const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  }));

export const TypeForm = () => {
    const classes = useStyles();
    this.props.children = [...this.props.children, <Confirm />];
    const [fields, setFields] = useState(0);
    const nextField = () => {
      if (fields < this.props.children.length) setFields((prev) => prev + 1);
    };
    const prevField = () => {
      if (fields > 0) setFields((prev) => prev - 1);
    };
    const onSubmit = () => {
        return console.log("hey");
      };
  return (
    <>
    <React.Fragment>
      <form className={classes.box} onSubmit={onSubmit}>
        {this.props.children[fields]}

        <ButtonGroup
          disableElevation
          size="small"
          variant="contained"
          color="primary"
        >
          {fields < this.props.children.length - 1 && fields > 0 && (
            <Button onClick={prevField}>back</Button>
          )}
          {fields < this.props.children.length - 2 && (
            <Button onClick={nextField}>Next</Button>
          )}
          {fields === this.props.children.length - 2 && (
            <Button onClick={nextField}>Submit</Button>
          )}
        </ButtonGroup>
      </form>
    </React.Fragment>
    </>
  )
}
