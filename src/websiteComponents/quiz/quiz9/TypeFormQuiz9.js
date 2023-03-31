import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import {Confirmation} from "../quiz9/Confirmation";
// import "../quiz1/LessonOneQuiz.css";



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

export const TypeFormQuiz9 = ({children, onSubmit}) => {
    const classes = useStyles();
  children = [...children, <Confirmation />];
  const [fields, setFields] = useState(0);
  const nextField = () => {
    if (fields < children.length) setFields((prev) => prev + 1);
  };
  const prevField = () => {
    if (fields > 0) setFields((prev) => prev - 1);
  };
  return (
    <>
    <React.Fragment>
      <form  className={classes.box} onSubmit={onSubmit}>
        {children[fields]}

        <ButtonGroup
          disableElevation
          size="small"
          variant="contained"
          color="primary"
          // className="mb-5"
        >
          {fields < children.length - 1 && fields > 0 && (
            <Button className="rounded-pill px-4 py-2 bg-light text-dark me-5" onClick={prevField}>back</Button>
          )}
          {fields < children.length - 2 && (
            <Button className="rounded-pill px-4 py-2 bg-light text-dark" onClick={nextField}>Next</Button>
          )}
          {fields === children.length - 2 && (
            <Button className="rounded-pill px-4 py-2 bg-success text-dark" onClick={nextField}>Submit</Button>
          )}
        </ButtonGroup>
      </form>
    </React.Fragment>
    </>
  )
}
