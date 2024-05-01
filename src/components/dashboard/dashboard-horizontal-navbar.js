import styles from "./dashboard.module.scss";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Menu as MenuIcon } from "../../icons/menu";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === "light"
    ? {
        boxShadow: theme.shadows[3],
      }
    : {
        backgroundColor: theme.palette.background.paper,
        borderBottomColor: theme.palette.divider,
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        boxShadow: "none",
      }),
}));

export const DashboardHorizontalNavbar = (props) => {
  const { onOpenSidebar, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          display: { xxl: "none" },
          top: 65,
          left: {
            xxl: 280,
          },
          width: {
            xxl: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: "inline-flex",
                xxl: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box>
            <NextLink href="/home" passHref>
              <a className={styles.homeNav}>PWNIQ</a>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <NextLink href="/play" passHref>
              <a className={styles.navItem}>PLAY</a>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <NextLink href="/pwniqDashboard" passHref>
              <a className={styles.navItem}>DASHBOARD</a>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <NextLink href="/courses" passHref>
              <a className={styles.navItem}>COURSES</a>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <NextLink href="/create" passHref>
              <a className={styles.navItem}>CREATE</a>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <NextLink href="/more" passHref>
              <a className={styles.navItem}>MORE</a>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardHorizontalNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
