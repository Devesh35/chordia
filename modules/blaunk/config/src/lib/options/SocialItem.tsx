import { Gmail, Whatsapp } from '@li/design/icons';

export type SocialItemType = 'whatsapp' | 'gmail';

export const SocialItem: {
  [k in SocialItemType]: {
    name: string;
    label: string;
    icon: React.ReactNode;
  };
} = {
  whatsapp: {
    name: 'Whatsapp',
    label: 'Ask anything on whatsapp',
    icon: <Whatsapp />,
  },
  gmail: {
    name: 'Gmail',
    label: 'Mail us on email',
    icon: <Gmail />,
  },
};
