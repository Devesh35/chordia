'use client';

import { grid } from '@li/config/design';
import { FormSectionWrapper, Input, Labeled, Select } from '@li/design/elements';
import { Search } from '@li/design/icons';
import { SelectItem } from '@li/types/design';
import { SubscriptionOptions, SubscriptionPlanOptions, SubscriptionType } from '@md/blaunk/config';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type SubscriptionPlan = (typeof SubscriptionPlanOptions)['advertisement'][0];

const noSubscriptionPlan: SubscriptionPlan = {
  id: '0',
  item: 'Select Subscription first',
  isDisabled: true,
  duration: {},
  value: 9999,
};
const formItemClassName = clsx(grid[`col-2`], grid['col-t-3'], grid['col-m-6']);

const today = new Date();

type Props = {
  onChangeType: (type: SubscriptionType) => void;
};

export const AddSub = ({ onChangeType }: Props) => {
  const [selectedSubscription, setSelectedSubscription] = useState<SelectItem>();
  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState<SubscriptionPlan>();
  const [renew, setRenew] = useState<string>();

  const selectedSubscriptionPlans = selectedSubscription
    ? SubscriptionPlanOptions[selectedSubscription.id as keyof typeof SubscriptionPlanOptions]
    : [noSubscriptionPlan];

  useEffect(() => {
    const newDate = new Date();
    console.log(selectedSubscriptionPlan);
    if (selectedSubscriptionPlan?.duration.years)
      newDate.setFullYear(newDate.getFullYear() + selectedSubscriptionPlan.duration.years);

    if (selectedSubscriptionPlan?.duration.months)
      newDate.setMonth(newDate.getMonth() + selectedSubscriptionPlan.duration.months);
    setRenew(newDate.toDateString());
  }, [selectedSubscriptionPlan]);

  const amount = `${selectedSubscriptionPlan?.value || 0}`;

  return (
    <>
      <FormSectionWrapper>
        <Labeled label={'Subscription'} className={formItemClassName}>
          <Select
            defaultItem={SubscriptionOptions[0]}
            placeholder="Select Subscription"
            options={SubscriptionOptions}
            onChange={(s) => {
              setSelectedSubscription(s);
              if (s?.id && s.id !== 'divider') onChangeType(s.id);
            }}
          />
        </Labeled>
        <Labeled label={'Subscription Plan'} className={formItemClassName}>
          <Select
            options={selectedSubscriptionPlans}
            placeholder="Select Subscription Plan"
            onChange={(s) => setSelectedSubscriptionPlan(s)}
          />
        </Labeled>
        <Labeled label="Subscription Date" className={formItemClassName}>
          <Input defaultValue={today.toDateString()} isReadOnly />
        </Labeled>
        <Labeled label="Renewal Date" className={formItemClassName}>
          <Input defaultValue={renew} isReadOnly />
        </Labeled>
        <Labeled label="Amount" className={formItemClassName}>
          <Input defaultValue={amount} isReadOnly />
        </Labeled>
      </FormSectionWrapper>
      <FormSectionWrapper>
        <Labeled label="Voucher code" className={formItemClassName}>
          <Input iconRight={<Search color="var(--textsecondary)" />} />
        </Labeled>
        <Labeled label="Rebate" className={formItemClassName}>
          <Input isReadOnly />
        </Labeled>
        <Labeled label="To pay" className={formItemClassName}>
          <Input isReadOnly defaultValue={amount} />
        </Labeled>
      </FormSectionWrapper>
    </>
  );
};
