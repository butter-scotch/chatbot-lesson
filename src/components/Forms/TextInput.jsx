import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {

  return(
    <TextField
      id="outlined-basic" 
      label={props.label}
      variant="filled" 
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      margin={"dense"}
      type={props.type}
      fullWidth={true}
      onChange={props.onChange}
    />
  )
}

export default TextInput;