import { Typography, Grid } from '@material-ui/core';

const HeaderContent = () => {
  return (
    <div className="header-content">
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Typography className="header-content-mod">Immersive experiences that deliver</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderContent;
