import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import "../quiz5/LessonFiveQuiz.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "7rem auto 5rem",
      maxWidth: "60%",
    },
  },
}));

export const Page2 = () => {
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
          <div className="fs-2 mb-5">
            The blood to the heart muscles is supplied by{" "}
            {/* <span className="fs-5"> (Select multiple) </span> */}
          </div>
          <FormControl component="fieldset">
            <FormGroup>
              <RadioGroup
                defaultValue="female"
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
              >
                <div className="d-flex justify-content-around">
                  <FormControlLabel
                    className="p-4 me-5"
                    value="female"
                    control={<BpRadio />}
                    label={
                      <Typography className="fs-4">Pulmonary Artery</Typography>
                    }
                  />
                  <FormControlLabel
                    className="p-4"
                    value="male"
                    control={<BpRadio />}
                    label={
                      <Typography className="fs-4"> Coronary Artery</Typography>
                    }
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <FormControlLabel
                    className="p-4 me-5"
                    value="other"
                    control={<BpRadio />}
                    label={
                      <Typography className="fs-4">Pulmonary Vein </Typography>
                    }
                  />
                  <FormControlLabel
                    className="p-4"
                    value="disabled"
                    // disabled
                    control={<BpRadio />}
                    label={
                      <Typography className="fs-4"> Coronary Vein</Typography>
                    }
                  />
                </div>
              </RadioGroup>
              {/* <div className="d-flex justify-content-around">
                <FormControlLabel
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
                      34.6 - 35.4 degree Celsius
                    </Typography>
                  }
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
                  label={
                    <Typography className="fs-3">
                      {" "}
                      38.2 - 39.6 degree Celsius{" "}
                    </Typography>
                  }
                />


              </div>
              <div className="d-flex justify-content-around">
                <FormControlLabel
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
                      36.4 - 37.2 degrees Celsius{" "}
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
                    <Typography className="fs-3">
                      39.4 - 40.6 degree Celsius
                    </Typography>
                  }
                />
              </div> */}
            </FormGroup>
          </FormControl>
        </motion.div>
      </form>
    </>
  );
};
