import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';

import { paths } from 'src/routes/paths';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';
import { useAuthContext } from 'src/auth/hooks';

import Logo from 'src/components/logo';
import Label from 'src/components/label';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
// import LoggedHeader from '../dashboard/header';
import { navConfig } from './config-navigation';
import LoginButton from '../common/login-button';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';
import AccountPopover from '../common/account-popover';
import LanguagePopover from '../common/language-popover';
import ContactsPopover from '../common/contacts-popover';
import NotificationsPopover from '../common/notifications-popover';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const { authenticated, method } = useAuthContext();

  const [checked, setChecked] = useState(false);

  // const check = React.useCallback(() => {
  //   if (!authenticated) {
  //     const searchParams = new URLSearchParams({
  //       returnTo: window.location.pathname,
  //     }).toString();

  //     const loginPath = loginPaths[method];

  //     const href = `${loginPath}?${searchParams}`;

  //     router.replace(href);
  //   } else {
  //     setChecked(true);
  //   }
  // }, [authenticated, method, router]);

  // React.useEffect(() => {
  //   check();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (!checked) {
  //   return null;
  // }

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
            badgeContent={
              <Link
                href={paths.changelog}
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ ml: 1 }}
              >
                <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
                  v5.7.0
                </Label>
              </Link>
            }
          >
            <Logo />
          </Badge>

          <Box component="div" sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop data={navConfig} />}

          <Box component="div" sx={{ flexGrow: 1 }} />

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            {/* <Button variant="contained" target="_blank" rel="noopener" href={paths.minimalUI}>
              Purchase Now
            </Button> */}
            {authenticated && (
              <Stack
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={{ xs: 0.5, sm: 1 }}
              >
                <LanguagePopover />

                <NotificationsPopover />

                <ContactsPopover />

                <SettingsButton />

                <AccountPopover />
              </Stack>
            )}
            {mdUp && !authenticated && <LoginButton />}

            {!authenticated && (
              <SettingsButton
                sx={{
                  ml: { xs: 1, md: 0 },
                  mr: { md: 2 },
                }}
              />
            )}

            {!mdUp && <NavMobile data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
