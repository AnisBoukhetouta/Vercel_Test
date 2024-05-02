// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    // one: `${ROOTS.DASHBOARD}/one`,
    // two: `${ROOTS.DASHBOARD}/two`,
    // three: `${ROOTS.DASHBOARD}/three`,
    pwniq: `${ROOTS.DASHBOARD}/pwniq`,
    play: `${ROOTS.DASHBOARD}/play`,
    dashboard: `${ROOTS.DASHBOARD}/dashboard`,
    courses: `${ROOTS.DASHBOARD}/courses`,
    create: `${ROOTS.DASHBOARD}/create`,
    more: `${ROOTS.DASHBOARD}/more`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },
};
