export const Routes = {
  account: {
    isProtected: true,
    title: 'Account | Blaunk',
    path: '/account',
    cart: {
      isProtected: true,
      title: 'Cart | Blaunk',
      path: '/account/cart',
    },
    orders: {
      isProtected: true,
      title: 'My Orders | Blaunk',
      path: '/account/orders',
    },
    profile: {
      isProtected: true,
      title: 'Profile | Blaunk',
      path: '/account/profile',
    },
    subscription: {
      isProtected: true,
      title: 'Subscription | Blaunk',
      path: '/account/subscription',
    },
    wishlist: {
      isProtected: true,
      title: 'My Wishlist | Blaunk',
      path: '/account/wishlist',
    },
  },
  auth: {
    create: {
      isProtected: false,
      title: 'Create password | Blaunk',
      path: '/auth/create',
    },
    forgot: {
      isProtected: false,
      title: 'Forgot password | Blaunk',
      path: '/auth/forgot',
    },
    login: {
      isProtected: false,
      title: 'Login | Blaunk',
      path: '/auth/login',
    },
    logout: {
      isProtected: true,
      title: 'Logout | Blaunk',
      path: '/auth/logout',
    },
    reset: {
      isProtected: true,
      title: 'Reset password | Blaunk',
      path: '/auth/reset',
    },
    signup: {
      isProtected: false,
      title: 'Sign up | Blaunk',
      path: '/auth/signup',
    },
  },
  home: {
    isProtected: false,
    title: 'Home | Blaunk',
    path: '/home',
    bgt: {
      isProtected: false,
      title: 'Home-BGT | Blaunk',
      path: '/home/bgt',
    },
    boutique: {
      isProtected: true,
      title: 'Boutique | Blaunk',
      path: '/home/boutique',
    },
    cake: {
      isProtected: true,
      title: 'Cake | Blaunk',
      path: '/home/cake',
    },
    store: {
      isProtected: true,
      title: 'Store | Blaunk',
      path: '/home/store',
    },
    tour: {
      isProtected: true,
      title: 'Tour | Blaunk',
      path: '/home/tour',
    },
  },
  info: {
    isProtected: false,
    title: 'Info | Blaunk',
    path: '/info',
    agreement: {
      seller: true,
      isProtected: true,
      title: 'Agreement | Blaunk',
      path: '/info/agreement',
    },
  },
  product: {
    seller: true,
    isProtected: true,
    title: 'My Products | Blaunk',
    path: '/product',
    add: {
      isProtected: true,
      title: 'Add Product | Blaunk',
      path: '/product/add',
    },
    edit: {
      isProtected: true,
      title: 'Edit Product | Blaunk',
      path: '/product/edit',
    },
    sell: {
      isProtected: true,
      title: 'Sell Product | Blaunk',
      path: '/product/sell',
    },
  },
  vendor: {
    seller: true,
    isProtected: true,
    title: 'Vendor | Blaunk',
    path: '/vendor',
    dashboard: {
      seller: true,
      isProtected: true,
      title: 'Dashboard | Blaunk',
      path: '/vendor/dashboard',
    },
    shipments: {
      isProtected: true,
      title: 'My Shipments | Blaunk',
      path: '/vendor/shipments',
    },
  },
};
