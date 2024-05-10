import { Stack } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';

import { _playFeatured } from 'src/_mock';

import PlayFeatured from './play-featured';

export default function PlayFeatureBottom() {
  return (
    <Stack width="98%" height="100%" sx={{ position: 'absolute', top: 500, left: 0 }}>
      <Grid container direction="row" spacing={2}>
        <Grid xs={12} sm={4}>
          <PlayFeatured list={_playFeatured} height="274px" />
        </Grid>
        <Grid container xs={12} sm={8} spacing={3}>
          {featured.map((x) => (
            <Grid key={x} xs={6} md={3} xl={2}>
              <PlayFeatured list={_playFeatured} height="129px" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
}

const featured = ['1', '2', '3', '4', '5', '6', '7', '8'];
