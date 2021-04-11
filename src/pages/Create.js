import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
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

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        // startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>


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



{/* ICONS
  import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
      <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
      <AcUnitOutlinedIcon color="action" fontSize="small"/>
      <AcUnitOutlinedIcon color="error" fontSize="small"/>
      <AcUnitOutlinedIcon color="disabled" fontSize="small"/> */}