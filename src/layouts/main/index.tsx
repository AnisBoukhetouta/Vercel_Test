import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';

import Header from './header';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const pathname = usePathname();

  const homePage = pathname === '/';

  return (
    <Box
      component="div"
      sx={{ display: 'flex', flexDirection: 'column', height: 1, overflow: 'hidden' }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!homePage && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
