import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";

import "../quiz7/LessonSevenQuiz.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "7rem auto 5rem",
      maxWidth: "60%",
    },
  },
}));

export const Page1 = () => {
  const classes = useStyles();

  // const [flavors, setFlavors] = React.useState({
  //   chocolate: true,
  //   vanilla: false,
  //   strawberry: false,
  //   orange: false,
  // });

  // const { chocolate, vanilla, strawberry, orange } = flavors;

  // const handleFlavorChange = (event) => {
  //   setFlavors({ ...flavors, [event.target.name]: event.target.checked });
  // };

  return (
    <>
      <form className={classes.root} autoComplete="off">
        <motion.div
          className="col-md-6 offset-md-3"
          initial={{ y: "50vh" }}
          animate={{ y: 0 }}
          transition={{ stiffness: 150 }}
        >
          {/* <div className="mb-5 lessonName">Life of a Doctor</div> */}
          <div className="fs-2 mb-5">
          Arrange the following in correct order :<br/> <br/>
          <span className="fs-4">A. Circulation &nbsp; &nbsp; &nbsp; B. Assess for danger &nbsp; &nbsp; &nbsp; C. Check response &nbsp; &nbsp; &nbsp; <br/>D. Call for help &nbsp; &nbsp; &nbsp; E. Breathing &nbsp; &nbsp; &nbsp; F. Airway </span>

          {/* <ol>
            <li>Circulation</li>
            <li>Assess for danger</li>
            <li>Check response </li>
            <li>Call for help </li>
            <li>Breathing </li>
            <li>Airway</li>
          </ol> */}

{" "}
            {/* <span className="fs-5"> (Select multiple) </span> */}
          </div>
          <FormControl component="fieldset">
            <FormGroup>
              <div className="d-flex justify-content-around">
                {/* <FormControlLabel
                  className="p-4 me-5"
                  control={
                    <Checkbox
                      checked={chocolate}
                      onChange={handleFlavorChange}
                      name="chocolate"
                    />
                  }
                  label={<Typography className="fs-3">B, C, F, E, A, D</Typography>}
                />
                <FormControlLabel
                  className="p-4"
                  control={
                    <Checkbox
                      checked={vanilla}
                      onChange={handleFlavorChange}
                      name="vanilla"
                    />
                  }
                  label={<Typography className="fs-3">A, C, B, E, F, D</Typography>}
                /> */}
                  <div className="mx-3 mt-5 bg-primary p-3 rounded-3 fs-5">
                  <p style={{ width: "10rem" }}>B, C, F, E, A, D</p>
                </div>
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3 fs-5">
                  <p style={{ width: "10rem" }}>A, C, B, E, F, D</p>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                {/* <FormControlLabel
                  className="p-4 me-5"
                  control={
                    <Checkbox
                      checked={strawberry}
                      onChange={handleFlavorChange}
                      name="strawberry"
                    />
                  }
                  label={<Typography className="fs-3">A, B, C, D, E, F</Typography>}
                />
                <FormControlLabel
                  className="p-4"
                  control={
                    <Checkbox
                      checked={orange}
                      onChange={handleFlavorChange}
                      name="orange"
                    />
                  }
                  label={<Typography className="fs-3">B, D, C, A, F, E</Typography>}
                /> */}
                 <div className="mx-3 mt-5 bg-primary p-3 rounded-3 fs-5">
                  <p style={{ width: "10rem" }}>A, B, C, D, E, F</p>
                </div>
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3 fs-5">
                  <p style={{ width: "10rem" }}>B, D, C, A, F, E </p>
                </div>
              </div>
            </FormGroup>
          </FormControl>
        </motion.div>
      </form>
    </>
  );
};
