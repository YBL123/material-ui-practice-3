import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

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
      >
        Submit
      </Button>
    </Container>
  );
}

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
