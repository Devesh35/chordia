import { storeSection, storeSections } from '@md/blaunk/config';
import { FormSection } from './FormSection';

export const AddStore = () => {
  return (
    <div>
      {storeSection.map((s) => (
        <FormSection {...storeSections[s]} isEdit />
      ))}
    </div>
  );
};
