import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Menu } from '@material-ui/icons';
import {Link} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  dialog: {
    color: 'white',
    backgroundColor: 'black'
    // opacity: 0.8
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={classes.dialog}>
        <Toolbar>
          <p className="title-loop">
            loopStudios
          </p>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>

        <List className="menu_list">
          <ListItem>
          <Link underline="none" component="button" className="menu_list-mod">ABOUT</Link>
          </ListItem>
          <ListItem>
          <Link underline="none" component="button" className="menu_list-mod">CAREERS</Link>
          </ListItem>
          <ListItem>
          <Link underline="none" component="button" className="menu_list-mod">EVENTS</Link>
          </ListItem>
          <ListItem>
          <Link underline="none" component="button" className="menu_list-mod">PRODUCTS</Link>
          </ListItem>
          <ListItem>
          <Link underline="none" component="button" className="menu_list-mod">SUPPORT</Link>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
