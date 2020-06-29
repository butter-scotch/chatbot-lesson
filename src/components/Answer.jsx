import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      width: "100%",
      color: "#0059df",
      backgroundColor: "#4bb9f9",
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#96e0ff",
        color: "0079ff"
      }
    }
  })  
));

const Answer = (props) => {
  const classes = useStyles();

  return(
    <>
      <Button className={classes.button} variant="contained" onClick={() => props.selectAnswer(props.content, props.nextId)}>
        {props.content}
      </Button>
    </>
  )

}

export default Answer