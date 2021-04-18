import React, { useState, forwardRef } from 'react';
import { Button, Dialog, ListItem, List, Toolbar, IconButton, Slide, Link, withStyles } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';


const StyledDialog = withStyles({
  paperFullScreen: {
    width: '100%',
    height: '100%',
    margin: 0,
    maxWidth: '100%',
    maxHeight: 'none',
    borderRadius: 0,
    backgroundColor: 'black',
    color: 'white',
  }
})(Dialog);


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} style={{ color: 'white' }}>
        <Menu fontSize="large" />
      </Button>

      <StyledDialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Toolbar>
          <p className="title-loop">loopStudios</p>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <Close fontSize="large" />
          </IconButton>
        </Toolbar>

        <List className="menu_list">
          <ListItem>
            <Link underline="none" component="button" className="menu_list-mod">
              ABOUT
            </Link>
          </ListItem>
          <ListItem>
            <Link underline="none" component="button" className="menu_list-mod">
              CAREERS
            </Link>
          </ListItem>
          <ListItem>
            <Link underline="none" component="button" className="menu_list-mod">
              EVENTS
            </Link>
          </ListItem>
          <ListItem>
            <Link underline="none" component="button" className="menu_list-mod">
              PRODUCTS
            </Link>
          </ListItem>
          <ListItem>
            <Link underline="none" component="button" className="menu_list-mod">
              SUPPORT
            </Link>
          </ListItem>
        </List>
      </StyledDialog>
    </div>
  );
};

export default ResponsiveMenu;
