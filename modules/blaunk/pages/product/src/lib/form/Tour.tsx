import { FormConfigProvider, FormSection } from '@li/design/elements';
import { TourProductDetails } from '@md/blaunk/config';
import { Disclaimer } from './Disclaimer';
import { FormAction } from './FormAction';

export const Tour = () => {
  return (
    <FormConfigProvider isEdit hasBG>
      <FormSection section={TourProductDetails} selected="tour-details" />
      <FormSection section={TourProductDetails} selected="tour-desc" />
      {/* <QuantitySection data={data} onChange={setData} /> */}
      <FormSection section={TourProductDetails} selected="tour-image" />

      <Disclaimer />
      <FormAction />
    </FormConfigProvider>
  );
};
