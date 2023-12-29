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
  b2b: {
    home: {
      isProtected: true,
      title: 'B2B-Home | Blaunk',
      path: '/b2b/home',
    },
    profile: {
      isProtected: true,
      title: 'B2B-Profile | Blaunk',
      path: '/b2b/profile',
    },
    addProduct: {
      isProtected: true,
      title: 'B2B-Add Product | Blaunk',
      path: '/b2b/add-product',
    },
    agreement: {
      isProtected: true,
      title: 'B2B-Agreement | Blaunk',
      path: '/b2b/agreement',
    },
    sell: {
      isProtected: true,
      title: 'B2B-Sell | Blaunk',
      path: '/b2b/sell',
    },
    buy: {
      isProtected: true,
      title: 'B2B-Buy | Blaunk',
      path: '/b2b/buy',
    },
    cart: {
      isProtected: true,
      title: 'B2B-Cart | Blaunk',
      path: '/b2b/cart',
    },
    myPost: {
      isProtected: true,
      title: 'B2B-My Post | Blaunk',
      path: '/b2b/my-post',
    },
    dashboard: {
      isProtected: true,
      title: 'B2B-Dashboard | Blaunk',
      path: '/b2b/dashboard',
    },
    order: {
      isProtected: true,
      title: 'B2B-Order | Blaunk',
      path: '/b2b/order',
    },
    shipment: {
      isProtected: true,
      title: 'B2B-Shipment | Blaunk',
      path: '/b2b/shipment',
    },
  },
} as const;
