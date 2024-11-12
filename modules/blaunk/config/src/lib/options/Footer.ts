import { Routes } from './Routes';

export const FooterDetails: {
  title: string;
  items: { label: string; path: string }[];
}[] = [
  {
    title: 'GET TO KNOW US',
    items: [
      { label: 'About us', path: Routes.info.aboutUs.path },
      { label: 'Mission & Vision', path: Routes.info.missionVision.path },
      { label: 'Careers', path: Routes.info.careers.path },
    ],
  },
  {
    title: 'TERMS & CONDITION',
    items: [
      {
        label: 'Return & Cancellation Policy',
        path: Routes.info.returnCancellation.path,
      },
      // { label: 'Mode of Refund', path: Routes.info.modeOfRefund.path },
      { label: 'Become a Business Partner', path: Routes.info.path },
      {
        label: 'Repeated Return Request',
        path: Routes.info.repeatedReturnRequest.path,
      },
      // { label: 'Company Policy', path: Routes.info.companyPolicy.path },
      { label: 'Privacy Policy', path: Routes.info.privacyPolicy.path },
    ],
  },
  {
    title: 'LET US HELP YOU',
    items: [
      { label: 'Returns Center', path: Routes.info.returnCenter.path },
      { label: 'Back to Home', path: Routes.home.path },
      { label: 'GST-ITC', path: Routes.info.gstItc.path },
      { label: 'Social Media', path: Routes.info.socialMedia.path },
      // { label: 'Advertisement', path: Routes.info.advertisement.path },
    ],
  },
];
