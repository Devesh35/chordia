export const Routes = {
  home: {
    isProtected: false,
    title: 'Home | Blaunk',
    path: '/home',
  },
  login: {
    isProtected: false,
    title: 'Login | Blaunk',
    path: '/login',
  },
  signup: {
    isProtected: false,
    title: 'Sign up | Blaunk',
    path: '/signup',
  },
} as const;
