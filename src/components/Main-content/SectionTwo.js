import { Grid, Hidden } from '@material-ui/core';

const SectionTwo = () => {
  return (
    <Grid container className="section-two">
      <Grid item md={12} sm={12} xs={12}>
        <Grid container alignItems="center">
          <Grid item md={6} xs={12}>
            <div className="title title--mod">Our creations</div>
          </Grid>

          <Grid item md={6} className="container-button d-none">
            <div className="button">See all</div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Grid container className="row-1">
              <Grid item md={3} xs={12} className="col--mod">
                <p className="description">Deep earth</p>
              </Grid>
              <Grid item md={3} xs={12} className="col--mod">
                <p className="description">Night arcade</p>
              </Grid>
              <Grid item md={3} xs={12} className="col--mod">
                <p className="description">Soccer team VR</p>
              </Grid>
              <Grid item md={3} xs className="col--mod">
                <p className="description">The grid</p>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={12} xs={12} sm>
            <Grid container className="row-2">
              <Grid item md={3} xs={12} className="col--mod">
                <p className="description">From up above VR</p>
              </Grid>
              <Grid item md={3} xs={12} className="col--mod">
                <p className="description">Pocket borealis</p>
              </Grid>
              <Grid item md={3} xs={12} className="col--mod">
                <p className="description">The curiosity</p>
              </Grid>
              <Grid item md={3} xs={12} className="col--mod">
                <p className="description">Make it fisheye</p>
              </Grid>
            </Grid>
          </Grid>

          <Hidden mdUp>
            <Grid item md={12} xs={12} className="container-button">
              <div className="button button--mod">See all</div>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
