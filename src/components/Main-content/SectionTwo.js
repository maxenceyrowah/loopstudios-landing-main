import { Grid, Hidden } from '@material-ui/core';

const SectionTwo = () => {
  return (
    <Grid container className="section-two" spacing={2}>
      <Grid item md={12} xs={12}>
        <Grid container alignItems="center">
          <Grid item md={6} xs={12}>
            <div className="title title--mod">Our creations</div>
          </Grid>

          <Grid item md={6}>
            <div className="container-button d-none">
              <button className="button"> See all</button>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12} xs={12}>
        <Grid container spacing={3} className="row-1">
          <Grid item md={3} xs={12}>
            <div className="column-1">
              <p className="description">Deep earth</p>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="column-2">
              <p className="description">Night arcade</p>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="column-3">
              <p className="description">Soccer team VR</p>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="column-4">
              <p className="description">The grid</p>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={3} className="row-2">
          <Grid item md={3} xs={12}>
            <div className="column-1">
              <p className="description">From up above VR</p>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="column-2">
              <p className="description">Pocket borealis</p>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="column-3">
              <p className="description">The curiosity</p>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="column-4">
              <p className="description">Make it fisheye</p>
            </div>
          </Grid>
        </Grid>

        <Hidden mdUp>
          <Grid item md={12} xs={12}>
            <div className="container-button">
              <button className="button button--mod">See all</button>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
