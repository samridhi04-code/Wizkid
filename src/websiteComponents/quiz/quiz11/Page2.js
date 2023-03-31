import React from "react";
// import '../afterLoginForm/FormStyle.css';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "8rem auto 5rem",
      maxWidth: "60%",
    },
  },
}));

export const Page2 = () => {
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
          <label>Please Enter Your Email Id</label>
          <TextField id="email-id" required={true} fullWidth label="Email id" />
          {/* <input className='border border-0 border-bottom border-dark' placeholder='Email id' style={{backgroundColor:'white', borderRadius:'none'}}/> */}
        </motion.div>
      </form>
    </>
  );
};
