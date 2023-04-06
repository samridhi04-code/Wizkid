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
import Stetho from '../../heroSection/heroSectionOne/Image/stethoscope.gif';
import Hammer from '../../heroSection/heroSectionOne/Image/hammer.gif';
import Magnify from '../../heroSection/heroSectionOne/Image/magnifying-glass.gif';
import Torch from '../../heroSection/heroSectionOne/Image/torch.png';
import Knee from '../../heroSection/heroSectionOne/Image/bone.png';
import Digger from '../../heroSection/heroSectionOne/Image/shovel.png';
import EyeGlass from '../../heroSection/heroSectionOne/Image/eye-glass.png';
import HeadLight from '../../heroSection/heroSectionOne/Image/head-light.png';
import Saw from '../../heroSection/heroSectionOne/Image/hand-saw.png';
import Vaccum from '../../heroSection/heroSectionOne/Image/vacuum.png';

import "../quiz1/LessonOneQuiz.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "7rem auto 5rem",
      maxWidth: "60%",
    },
  },
}));

export const Page3 = () => {
  const classes = useStyles();

  const [flavors, setFlavors] = React.useState({
    chocolate: true,
    vanilla: false,
    strawberry: false,
    orange: false,
  });

  const { chocolate, vanilla, strawberry, orange } = flavors;

  const handleFlavorChange = (event) => {
    setFlavors({ ...flavors, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <form className={classes.root} autoComplete="off">
        <motion.div
          className="col-md-6 offset-md-3"
          initial={{ y: "50vh" }}
          animate={{ y: 0 }}
          transition={{ stiffness: 150 }}
        >
          {/* <div className="mb-5 lessonName">Checking the Pulse</div> */}
          <div className="mb-5 mt-5">
          {/* <p className="">Lesson</p> */}
          <p className="fs-2 ">Select the tools that a doctor uses during his work{" "}
          <br/>  <span className="fs-5"> (Select multiple) </span></p>
          {/* <p></p> */}
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
                  label={<img src={Stetho} height="150px" width="150px"/>}
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
                  label={<img src={Hammer} height="150px" width="150px"/>}
                /> */}
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={Stetho} height="100px" width="100px"/>
                </div>
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={Knee} height="100px" width="100px"/>
                </div>
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={Saw} height="100px" width="100px"/>
                </div>
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={Hammer} height="100px" width="100px"/>
                </div>
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={HeadLight} height="100px" width="100px"/>
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
                  label={<img src={Magnify} height="130px" width="130px"/>}
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
                  label={<img src={Torch} height="150px" width="150px"/>}
                /> */}
                 <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={EyeGlass} height="100px" width="100px"/>
                </div>
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={Torch} height="100px" width="100px"/>
                </div>
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={Digger} height="100px" width="100px"/>
                </div>
                <div className="mt-5 mx-4 rounded-3 p-2 bg-light">
                  <img src={Magnify} height="100px" width="100px"/>
                </div>
                <div className="mt-5 ms-4 bg-light rounded-3 p-2">
                  <img src={Vaccum} height="100px" width="100px"/>
                </div>
              </div>
              {/* <div className="text-light d-flex">
                <p className="">Lesson</p>
                </div> */}
            </FormGroup>
            
          </FormControl>
        </motion.div>
        
      </form>
    </>
  );
};
