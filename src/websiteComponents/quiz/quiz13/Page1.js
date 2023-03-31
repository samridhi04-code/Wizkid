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
import TextField from '@mui/material/TextField';

import "../quiz13/LessonThirteenQuiz.css";

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

//   const ul=document.querySelector("ul"),
//   input=document.querySelector("standard-required"),
//   tagNumb=document.querySelector(".details p span");
//   let maxTags=3,
//   tags=[" hey", "hi "];
//   countTags();
//   createTag();
//   function countTags(){
//     input.focus();
//     tagNumb.innerText=maxTags-tags.length;
//   }
//   console.log(input);
//   function createTag(){
//     ul.querySelectorAll("li").forEach(li=>li.remove());
//     tags.slice().reverse().forEach(tag=>{
//       let liTag=`<li>${tag} <i class="uit uit-multiply" onclick="remove()"`;
//       ul.insertAdjacentHTML("afterbegin",liTag);
//     });
//     countTags();
//   }
// function remove(element,tag){
//   let index =tags.indexOf(tag);
//   tags=[...Checkbox.slice(0, index), ...tags.slice(index+1)];
//   element.parentElement.remove();
//   countTags();
// }

//   function addTag (e) {
//     if (e.key == "Enter") {
//      let tag=e.target.value.replace(/\s+/g,' '); 
//     if (tag.length > 1 && !tags. includes (tag)) {
    
//     if (tags.length < 10) {
    
//     tag.split(',').forEach (tag =>{
    
//     tags.push(tag); 
//     createTag();
    
    
    
//     });
//     e.target.value = "";
//   }
// }
//     }
//   }
//     input.addEventListener("keyup", addTag);
//     const removeBtn = document.querySelector(".details button"); 
//     removeBtn.addEventListener("click", () =>{

//       tags.length = 0;
      
//       ul.querySelectorAll("li").forEach (li => li.remove()); 
//       countTags ();
//     });

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
          From the lesson, write down the uses of Paracetamol {" "}
            {/* <span className="fs-5"> (Select multiple) </span> */}
          </div>
          <FormControl component="fieldset">
            <FormGroup>
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
                  label={<Typography className="fs-3">World</Typography>}
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
                  label={<Typography className="fs-3">World</Typography>}
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
                    <div>
                      <ul>
              <TextField
          required
          id="standard-required"
          label="Required"
          // defaultValue="Hello World"
          variant="standard"
          style={{    width: '500px'}}
        //  data-role='tagsinput'
        />
        </ul>
              </div>
              {/* <div className="mt-5 fs-5 details">
                <p><span>3</span> answers are remaining</p>
              </div> */}
            </FormGroup>
          </FormControl>
        </motion.div>
      </form>
    </>
  );
};
