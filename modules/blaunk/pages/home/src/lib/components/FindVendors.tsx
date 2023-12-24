import { Purpose, Units } from '@md/blaunk/config';
import { ImageCardDetails } from '@li/design/components';
import {
  Button,
  Divider,
  Input,
  InputAndSelect,
  InputArea,
  Labeled,
  Select,
} from '@li/design/elements';
import styles from './find-vendors.module.css';

const SocialItem = ({ label, i }: { label: string; i: number }) => (
  <ImageCardDetails
    image={{
      src: `https://source.unsplash.com/random/80x${80 + i}`,
      width: 80,
      height: 80,
      alt: 'random',
    }}
    details={
      <div className={styles.details}>
        {label}
        <Divider color="var(--gray800)" />
        <div className={styles['social-link']}>Click here</div>
      </div>
    }
  />
);

export const FindVendors = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Let us help you find best vendors</div>
      <div className={styles.content}>
        <div className={styles.form}>
          <Labeled label="Group">
            <Input placeholder="Enter group" />
          </Labeled>
          <Labeled label="Article/service name">
            <Input placeholder="Enter article/service name" />
          </Labeled>
          <Labeled label="Purpose">
            <Select
              options={Purpose.map((i) => ({ id: i.id, item: i.label }))}
              placeholder="Select purpose"
            />
          </Labeled>
          <Labeled label="Qty">
            <InputAndSelect
              input={{ placeholder: 'Enter qty', type: 'number' }}
              select={{
                options: Units.map((u) => ({ id: u, item: u })),
                placeholder: 'Select unit',
              }}
              inputFlex={0.9}
            />
          </Labeled>
          <Labeled label="Requirements">
            <InputArea
              className={styles['input-area']}
              placeholder="Specify your requirements in max 500 words e.g. Name, color, size, MOQ, material, custom, etc."
            />{' '}
          </Labeled>
        </div>
        <div className={styles.action}>
          <SocialItem label="Ask anything on whatsapp" i={1}></SocialItem>
          <SocialItem label="Mail us on email" i={2}></SocialItem>
          <Button>Submit requirements</Button>
        </div>
      </div>
    </div>
  );
};
