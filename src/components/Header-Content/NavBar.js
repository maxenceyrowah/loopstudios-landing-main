import { Grid, Link, Hidden } from '@material-ui/core';
import Menu from './ResponsiveMenu';

const NavBar = () => {
  return (
    <div className="navbar_container">
      <Grid container spacing={3} justify="space-between" alignItems="center">
        <Grid item md={6}>
          <div className="navbar_logo">loopStudios</div>
        </Grid>
        <Grid item md={6}>
          <Hidden xsDown smDown>
            <div className="navbar_menu">
              <Link component="button" underline="none" className="navbar_link">
                About
              </Link>
              <Link component="button" underline="none" className="navbar_link">
                Careers
              </Link>
              <Link component="button" underline="none" className="navbar_link">
                Events
              </Link>
              <Link component="button" underline="none" className="navbar_link">
                Products
              </Link>
              <Link component="button" underline="none" className="navbar_link">
                Support
              </Link>
            </div>
          </Hidden>

          <Hidden mdUp>
            <Menu />
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
