import { Stack } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';

import { _playFeatured } from 'src/_mock';

import PlayFeatured from './play-featured';

export default function PlayFeatureBottom() {
  return (
    <Stack width="100%" height="100%" sx={{ position: 'absolute', top: 0, left: 0 }}>
      <Grid container spacing={3}>
        <Grid xs={4}>
          <PlayFeatured list={_playFeatured} sx={{ width: '358px' }} height="274px" />
        </Grid>
        <Grid container xs={8} spacing={3}>
          {featured.map((x) => (
            <Grid key={x} xs={3}>
              <PlayFeatured list={_playFeatured} sx={{ width: '169px' }} height="129px" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
}

const featured = ['1', '2', '3', '4', '5', '6', '7', '8'];
