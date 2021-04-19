import { Grid } from '@material-ui/core';
// import Logo1 from '../../shared/images/desktop/image-deep-earth.jpg';
// import Logo2 from '../../shared/images/desktop/image-night-arcade.jpg';
// import Logo3 from '../../shared/images/desktop/image-soccer-team.jpg';
// import Logo4 from '../../shared/images/desktop/image-grid.jpg';

// import Logo5 from '../../shared/images/desktop/image-from-above.jpg';
// import Logo6 from '../../shared/images/desktop/image-pocket-borealis.jpg';
// import Logo7 from '../../shared/images/desktop/image-curiosity.jpg';
// import Logo8 from '../../shared/images/desktop/image-fisheye.jpg';

const SectionTwo = () => {
  return (
    <div className="section-two">
      <Grid container spacing={2}>
        <Grid item md={12} sm={12} xs={12}>
          <Grid container alignItems="center">
            <Grid item md={6}>
              <div className="title">Our creations</div>
            </Grid>
            <Grid item md={6} className="container-button">
              <div className="button">See all</div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Grid container className="row-1">
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo1} alt="" /> */}
                  <p className="description">Deep earth</p>
                </Grid>
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo2} alt="" /> */}
                  <p className="description">Night arcade</p>
                </Grid>
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo3} alt="" /> */}
                  <p className="description">Soccer team VR</p>
                </Grid>
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo4} alt="" /> */}
                  <p className="description">The grid</p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={12}>
              <Grid container className="row-2" spacing={2}>
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo5} alt="" /> */}
                  <p className="description">From up above VR</p>
                </Grid>
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo6} alt="" /> */}
                  <p className="description">Pocket borealis</p>
                </Grid>
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo7} alt="" /> */}
                  <p className="description">The curiosity</p>
                </Grid>
                <Grid item md={3} className="col--mod">
                  {/* <img src={Logo8} alt="" /> */}
                  <p className="description">Make it fisheye</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SectionTwo;
