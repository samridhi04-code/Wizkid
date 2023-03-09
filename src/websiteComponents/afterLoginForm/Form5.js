import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "8rem auto 5rem",
      maxWidth: "60%",
    },
  },
}));

export const Form5 = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} autoComplete="off">
        <motion.div
          className="col-md-6 offset-md-3"
          initial={{ y: "50vh" }}
          animate={{ y: 0 }}
          transition={{ stiffness: 150 }}
        >
            <label>You Are In which Standard Currently ? </label>
          <TextField id="class" required={true} fullWidth label="Class" />
        </motion.div>
      </form>
    </>
  );
};
