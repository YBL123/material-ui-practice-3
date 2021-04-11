import React from 'react'
import Typography from '@material-ui/core/Typography';


export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        //sets it to an h2 rather than an h6 -> although it will still look the same
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create A New Note
      </Typography>
    </div>
    
  )
}
