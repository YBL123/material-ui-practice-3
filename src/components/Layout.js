import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

const useStyls = makeStyles({
  root: {
    display: 'flex',
  },
  page: {
    background:' #f9f9f9',
    width:'100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  }
})

const Layout = ({ children }) => {
  const classes = useStyls()

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        // allows to override inbuilt classes
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">
            Ninja Notes
          </Typography>
        </div>
      </Drawer>

      <div className={classes.page}>
      {children}
      </div>
    </div>
  )
}

export default Layout
