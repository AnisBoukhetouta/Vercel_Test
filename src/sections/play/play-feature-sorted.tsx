import { isArray } from 'lodash';

import { Stack, Typography } from '@mui/material';

import { useGetGames } from 'src/api/games';
import { HOST_API } from 'src/config-global';

import FortniteSoloCard from 'src/components/fortnite-cards/fortnite-solo-card';
import FortniteCoupleCard from 'src/components/fortnite-cards/fortnite-couple-card';

export default function PlayFeatureSorted() {
  return (
    <Stack direction="column" width="35%" height="100%" sx={{ overflowY: 'scroll' }} gap="9px">
      <FeatureGroup />
    </Stack>
  );
}

const baseImageUrl = `${HOST_API}`;
const FeatureGroup = () => {
  const { data, isLoading, error, isValidating } = useGetGames();
  console.log(data);
  return (
    <Stack direction="column" alignItems="start" gap="9px">
      {isArray(data) &&
        data.map((x) => (
          <div key={x.gameTitle}>
            <Typography component="div" sx={{ fonstSize: '16px !important', fontWeight: 600 }}>
              {x.gameType}
            </Typography>
            {!x.secondColor ? (
              <FortniteSoloCard
                mainImage={`${baseImageUrl}/${
                  x.files.find(({ fieldName }: any) => fieldName === 'mainImage').destination
                }/${x.files.find(({ fieldName }: any) => fieldName === 'mainImage').fileName}`}
                key={x._id}
              />
            ) : (
              <FortniteCoupleCard
                mainImage={`${baseImageUrl}/${
                  x.files.find(({ fieldName }: any) => fieldName === 'mainImage').destination
                }/${x.files.find(({ fieldName }: any) => fieldName === 'mainImage').fileName}`}
                secondImage={`${baseImageUrl}/${
                  x.files.find(({ fieldName }: any) => fieldName === 'secondImage').destination
                }/${x.files.find(({ fieldName }: any) => fieldName === 'secondImage').fileName}`}
                key={x._id}
              />
            )}
          </div>
        ))}
    </Stack>
  );
};

const group = ['Speed', 'Shields', 'Endurance'];
const cards = ['first', 'second'];
