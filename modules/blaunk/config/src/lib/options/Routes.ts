export const Routes = {
  home: {
    isProtected: false,
    title: 'Home | Blaunk',
    path: '/home',
    b2b: {
      isProtected: false,
      title: 'Home-B2B | Blaunk',
      path: '/home/b2b',
    },
  },
  auth: {
    login: {
      isProtected: false,
      title: 'Login | Blaunk',
      path: '/auth/login',
    },
    signup: {
      isProtected: false,
      title: 'Sign up | Blaunk',
      path: '/auth/signup',
    },
    forgot: {
      isProtected: false,
      title: 'Forgot password | Blaunk',
      path: '/auth/forgot',
    },
    create: {
      isProtected: false,
      title: 'Create password | Blaunk',
      path: '/auth/create',
    },
    reset: {
      isProtected: true,
      title: 'Reset password | Blaunk',
      path: '/auth/reset',
    },
    logout: {
      isProtected: true,
      title: 'Logout | Blaunk',
      path: '/auth/logout',
    },
  },
} as const;
