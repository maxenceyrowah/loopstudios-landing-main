import { Grid } from '@material-ui/core';

import { ReactComponent as Facebook } from 'shared/icons/icon-facebook.svg';
import { ReactComponent as Twitter } from 'shared/icons/icon-twitter.svg';
import { ReactComponent as Pinterest } from 'shared/icons/icon-pinterest.svg';
import { ReactComponent as Instagram } from 'shared/icons/icon-instagram.svg';

const Footer = () => {
  return (
    <Grid container className="footer">
      <Grid item md={12} xs={12}>
        <Grid container className="footer-wrapper" spacing={2}>
          <Grid item md={6} xs={12} className="footer-wrapper-col-1">
            <Grid container className="col-1">
              <Grid item md={12} xs={12}>
                <p className="col-1_title">loopstudios</p>
              </Grid>
              <Grid item md={12}>
                <span className="col-1_menu_link--mod">About</span>
                <span className="col-1_menu_link--mod">Careers</span>
                <span className="col-1_menu_link--mod">Events</span>
                <span className="col-1_menu_link--mod">Products</span>
                <span className="col-1_menu_link--mod">Support</span>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6} xs={12} className="footer-wrapper-col-2 col-2">
            <Grid container>
              <Grid item md={12}>
                <span className="col-2_icons--mod facebook">
                  <Facebook />
                </span>
                <span className="col-2_icons--mod twitter">
                  <Twitter />
                </span>
                <span className="col-2_icons--mod pinterest">
                  <Pinterest />
                </span>
                <span className="col-2_icons--mod instagram">
                  <Instagram />
                </span>
              </Grid>
              <Grid item md={12} xs={12}>
                <p className="col-2_copyright"> © 2021 Loopstudios. All rights reserved.</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
