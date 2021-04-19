import { Grid } from '@material-ui/core';

const SectionOne = (props) => {
  return (
    <>
      <Grid container>
        <Grid item md={6} xs={12} sm={12}>
          <div className="bloc-1">
            <img src={props.logo} alt="" className="bloc-1-image" />
          </div>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <div className="bloc-2">
            <p className="bloc-2-title">The leader in interactive VR</p>
            <p className="bloc-2-description">
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best
              companies around the globe. Our award-winning creations have transformed businesses through digital
              experiences that bind to their brand.
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionOne;
