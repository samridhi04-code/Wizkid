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

import "../quiz1/LessonOneQuiz.css";

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
          <div className="fs-2 mb-5 mt-5">
            What does the daily work of a Doctor involve ? <br />
            <span className="fs-5"> (Select multiple) </span>
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
                  label={
                    <Typography className="fs-3">
                      Take Medical History
                    </Typography>
                  }
                /> */}
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3">
                  <p style={{width:'8rem'}}>Ward Rounds</p>
                </div>
                {/* <FormControlLabel
                  className="p-4"
                  control={
                    <Checkbox
                      checked={vanilla}
                      onChange={handleFlavorChange}
                      name="vanilla"
                    />
                  }
                  label={
                    <Typography className="fs-3">
                      Make Treatment Plan{" "}
                    </Typography>
                  }
                /> */}
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3 ">
                  <p style={{width:'8rem'}}>Take Medical History</p>
                </div>
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3 ">
                  <p style={{width:'8rem'}} >Clinical examination</p>
                </div>
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3">
                  <p style={{width:'8rem'}}>Make Treatment Plan</p>
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
                  label={
                    <Typography className="fs-3">
                      {" "}
                      Organise medical tests
                    </Typography>
                  }
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
                  label={
                    <Typography className="fs-3"></Typography>
                  }
                /> */}
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3">
                  <p style={{width:'8rem'}}>Save lives</p>
                </div>
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3">
                  <p style={{width:'8rem'}}>Document notes</p>
                </div>
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3">
                  <p style={{width:'8rem'}}>Organise medical tests</p>
                </div>
                <div className="mx-3 mt-5 bg-primary p-3 rounded-3">
                  <p style={{width:'8rem'}}>Perform surgeries</p>
                </div>
              </div>
            </FormGroup>
          </FormControl>
        </motion.div>
      </form>
    </>
  );
};
