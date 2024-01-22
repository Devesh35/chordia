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
    path: '/legacy/info',
    aboutUs: {
      isProtected: false,
      title: 'About Us | Blaunk',
      path: '/legacy/info/about-us',
    },
    advertisement: {
      isProtected: false,
      title: 'Advertisement | Blaunk',
      path: '/legacy/info/advertisement',
    },
    agreement: {
      seller: true,
      isProtected: true,
      title: 'Agreement | Blaunk',
      path: '/legacy/info/agreement',
    },
    careers: {
      isProtected: false,
      title: 'Careers | Blaunk',
      path: '/legacy/info/careers',
    },
    companyPolicy: {
      isProtected: false,
      title: 'Company Policy | Blaunk',
      path: '/legacy/info/company-policy',
    },
    gstItc: {
      isProtected: false,
      title: 'GST ITC | Blaunk',
      path: '/legacy/info/gst-itc',
    },
    missionVision: {
      isProtected: false,
      title: 'Mission & Vision | Blaunk',
      path: '/legacy/info/mission-vision',
    },
    modeOfRefund: {
      isProtected: false,
      title: 'Mode of Refund | Blaunk',
      path: '/legacy/info/mode-of-refund',
    },
    privacyPolicy: {
      isProtected: false,
      title: 'Privacy Policy | Blaunk',
      path: '/legacy/info/privacy-policy',
    },
    repeatedReturnRequest: {
      isProtected: false,
      title: 'Repeated Return Request | Blaunk',
      path: '/legacy/info/repeated-return-request',
    },
    returnCancellation: {
      isProtected: false,
      title: 'Return & Cancellation | Blaunk',
      path: '/legacy/info/return-cancellation',
    },
    returnCenter: {
      isProtected: false,
      title: 'Return Center | Blaunk',
      path: '/legacy/info/return-center',
    },
    socialMedia: {
      isProtected: false,
      title: 'Social Media | Blaunk',
      path: '/legacy/info/social-media',
    },
    termsConditions: {
      isProtected: false,
      title: 'Terms & Conditions | Blaunk',
      path: '/legacy/info/terms-conditions',
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
      bgt: {
        isProtected: true,
        title: 'Add BGT | Blaunk',
        path: '/product/add/bgt',
      },
      boutique: {
        isProtected: true,
        title: 'Add Boutique | Blaunk',
        path: '/product/add/boutique',
      },
      cake: {
        isProtected: true,
        title: 'Add Cake | Blaunk',
        path: '/product/add/cake',
      },
      store: {
        isProtected: true,
        title: 'Add Store | Blaunk',
        path: '/product/add/store',
      },
      tour: {
        isProtected: true,
        title: 'Add Tour | Blaunk',
        path: '/product/add/tour',
      },
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
    register: {
      seller: true,
      isProtected: true,
      title: 'Vendor Register | Blaunk',
      path: '/vendor/register',
    },
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
    subscription: {
      isProtected: true,
      title: 'My Subscription | Blaunk',
      path: '/vendor/subscription',
    },
  },
};
