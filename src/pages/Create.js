import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { FormControlLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refresh of submit

    //every time we submit the form updating value to false -> only setting to true if invalid
    setTitleError(false);
    setDetailsError(false);

    //if input is empty
    if (title == '') {
      setTitleError(true);
    }
    if (details == '') {
      setDetailsError(true);
    }

    if (title && details) {
      //output values
      console.log(title, details, category);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        //sets it to an h2 rather than an h6 -> although it will still look the same
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create A New Note
      </Typography>

      {/* noValidate = says to browser not to use inbuilt validation messages */}
      {/* autoComplete="off" = doesn't try to autocomplete when you start to type*/}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required //adds an astrix -> not a form of validation
          error={titleError} //shows red border //false to being with
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4} // 4 rows of text inside TextField
          fullWidth
          required
          error={detailsError} //shows red border //false to being with
        />


          {/* RadioGroup = so user can only select one of the options */}
          {/* FormControlLabel value = {category} -> piece of state */}
          {/* best to embed radio buttons in FormControlLabel rather than just <Radio />*/}

          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel value="money" control={<Radio />} label="Money"/>
              <FormControlLabel value="todos" control={<Radio />} label="Todos"/>
              <FormControlLabel value="reminders" control={<Radio />} label="Reminders"/>
              <FormControlLabel value="work" control={<Radio />} label="Work"/>
            </RadioGroup>
          </FormControl>


        <Button
          type="submit"
          color="secondary"
          variant="contained"
          // startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

//Buttons
// import ButtonGroup from '@material-ui/core/ButtonGroup';
{
  /* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button type="submit">ONE</Button>
        <Button type="submit">TWO</Button>
        <Button type="submit">THREE</Button>
      </ButtonGroup> */
}

{
  /* ICONS
  import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
      <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
      <AcUnitOutlinedIcon color="action" fontSize="small"/>
      <AcUnitOutlinedIcon color="error" fontSize="small"/>
      <AcUnitOutlinedIcon color="disabled" fontSize="small"/> */
}
