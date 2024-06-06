import { isArray } from 'lodash';

import { Stack } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';

import { _playFeatured } from 'src/_mock';
import { useGameContext } from 'src/game/hook/use-game-context';

import PlayFeatured from './play-featured';
import { GameCard } from './play-feature-sorted';

export default function PlayFeatureBottom() {
  const { data } = useGameContext();
  return (
    <Stack width="100%" sx={{ p: 3 }}>
      <Grid container direction="row" spacing={2}>
        <Grid xs={12} sm={4}>
          <PlayFeatured list={_playFeatured} height="274px" />
        </Grid>
        <Grid container xs={12} sm={8} spacing={3}>
          {/* {featured.map((x) => ( */}
          {isArray(data) && data.length > 0 ? (
            data.map((x: any) => (
              <Grid key={x._id} xs={6} md={2.9} sx={{ textAlign: 'end' }}>
                <GameCard key={x._id} cardData={x} />
              </Grid>
            ))
          ) : (
            <Grid xs={6} md={3} xl={2}>
              <PlayFeatured list={_playFeatured} height="129px" />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}

const featured = ['1', '2', '3', '4', '5', '6', '7', '8'];
