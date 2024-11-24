'use client';
import { fromCamelCase } from '@li/config/utils';
import { Accordion, Button, FormConfigProvider } from '@li/design/elements';
import { withConditionCase } from '@li/design/enhancers';
import { SubscriptionType } from '@md/blaunk/config';
import { useState } from 'react';
import { AddAd } from './AddAd';
import { AddDial } from './AddDial';
import { AddMarket } from './AddMarket';
import { AddSub } from './AddSub';
import styles from './add.module.css';

export const Add = () => {
  const [type, setType] = useState<SubscriptionType>('advertisement');

  return (
    <FormConfigProvider isEdit>
      <Accordion title={'Subscription'} variant="primary" initialOpen>
        <AddSub onChangeType={setType} />
      </Accordion>
      <Accordion title={fromCamelCase(type)} variant="primary">
        {withConditionCase(type)({
          advertisement: <AddAd />,
          marketFeed: <AddMarket />,
          blaunkDial: <AddDial />,
        })}
      </Accordion>

      <div className={styles.title}>Disclaimer</div>
      <div className={styles.disclaimer}>
        <div>
          We agree with Terms & Condition of B2B Blaunk Trade. Free Returns and Refund if Buyer is not satisfied with
          goods received and found vary or different from product image.
        </div>
        <div>
          Blaunk will not be held liable for any legal or claiming, as this is only an Online platform for secure trade
          between vendors & Customer.
        </div>
        <div>
          This post will be valid as per Plan selected and get auto deleted. Return policy is only valid if vendor
          failed to supply promised articles.
        </div>
        <div>
          Seller Profile or Product Listing will be Blocked or Delist, if found continuous Cancel/Non Supply of Goods or
          Services or any fraudulent activity got noted.
        </div>
        <div>Listing fees is Non - Refundable and Inclusive of all Govt Levies & Taxes.</div>
        <div>
          If seller get reported for twice, Sellers' profile/listing/advertisement will be suspended for 2 months.
        </div>
        <div>
          If Seller get reported for more than 2 times, Sellers' profile/listing/advertisement will be blocked
          permanently.
        </div>
        <div>I have read and agree to all the terms and condition of B2B Blaunk trade policy.</div>
      </div>

      <div className={styles.action}>
        <Button variant="text"> Cancel</Button>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Proceed to payment</Button>
      </div>
    </FormConfigProvider>
  );
};
