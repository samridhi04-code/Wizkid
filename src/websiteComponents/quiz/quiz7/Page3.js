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
import Ambulance from "../../heroSection/heroSectionOne/Image/ambulance.png";
import Police from "../../heroSection/heroSectionOne/Image/vehicle.png";
import Fire from "../../heroSection/heroSectionOne/Image/firefighter.png";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";

import "../quiz7/LessonSevenQuiz.css";

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
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 20,
    height: 20,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark"
          ? "rgba(57,75,89,.5)"
          : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 20,
      height: 20,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  });

  function BpRadio(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }
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
          <div className="fs-2 mb-1">
            Match the emergency numbers to their respective emergencies
            <table className="m-auto mt-2">
              <tr>
                <td className="fs-5">
                  1. (Police)&nbsp; &nbsp; &nbsp;
                  <img src={Police} height="100px" width="100px" />
                </td>
                <td className="fs-4" style={{ paddingLeft: "100px" }}>
                  a. 101
                </td>
              </tr>
              <tr>
                <td className="fs-5">
                  2. (Ambulance)&nbsp;{" "}
                  <img src={Ambulance} height="100px" width="100px" />
                </td>
                <td className="fs-4" style={{ paddingLeft: "100px" }}>
                  b. 112
                </td>
              </tr>
              <tr>
                <td className="fs-5">
                  3. (Fire) &nbsp; &nbsp; &nbsp;{" "}
                  <img src={Fire} height="90px" width="90px" />
                </td>
                <td className="fs-4" style={{ paddingLeft: "100px" }}>
                  c. 102
                </td>
              </tr>
            </table>{" "}
            {/* <span className="fs-5"> (Select multiple) </span> */}
          </div>
          <FormControl component="fieldset">
            <FormGroup>
              <RadioGroup
                defaultValue="female"
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
              >
                <div className="d-flex justify-content-between">
                  {/* <FormControlLabel
                  className="p-4 me-5"
                  control={
                    <Checkbox
                      checked={chocolate}
                      onChange={handleFlavorChange}
                      name="chocolate"
                    />
                  }
                  label={<Typography className="fs-3">1-b, 2-c, 3-a</Typography>}
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
                  label={<Typography className="fs-3">1-b, 2-a, 3-c</Typography>}
                /> */}
                  <FormControlLabel
                    className="px-4 pt-5 me-5"
                    value="female"
                    control={<BpRadio />}
                    label={
                      <Typography className="fs-4">1-b, 2-c, 3-a</Typography>
                    }
                  />
                  <FormControlLabel
                    className="px-4 pt-5"
                    value="male"
                    control={<BpRadio />}
                    label={
                      <Typography className="fs-4">1-b, 2-a, 3-c</Typography>
                    }
                  />
                </div>
              </RadioGroup>
              {/* <div className="d-flex justify-content-around">
                <FormControlLabel
                  className="p-4 me-5"
                  control={
                    <Checkbox
                      checked={strawberry}
                      onChange={handleFlavorChange}
                      name="strawberry"
                    />
                  }
                  label={<Typography className="fs-3">World</Typography>}
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
                  label={<Typography className="fs-3">World</Typography>}
                />
              </div> */}
            </FormGroup>
          </FormControl>
        </motion.div>
      </form>
    </>
  );
};
