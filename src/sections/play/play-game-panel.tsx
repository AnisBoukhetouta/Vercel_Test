import { Stack } from '@mui/material';

import CustomUnityPlayer from 'src/app/components/custom-unity-player/custom-unity-player';

// import PlayItem from './play-item';
// import EcommerceWidgetSummary from '../overview/e-commerce/ecommerce-widget-summary';

export default function PlayGamePanel() {
  return (
    <Stack sx={{ width: '100%', height: '100%' }} direction="row" justifyContent="space-between">
      {/* <Stack sx={{ width: 344, height: '100%' }} justifyContent="space-between">
        <PlayItem />
        <EcommerceWidgetSummary
          title="Plays"
          percent={39.4}
          total={31968}
          chart={{
            series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
          }}
        />
      </Stack> */}
      <CustomUnityPlayer />
    </Stack>
  );
}
