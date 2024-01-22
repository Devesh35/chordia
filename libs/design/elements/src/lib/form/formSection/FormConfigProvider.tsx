import { ReactChildren } from '@li/types/shared';
import { createContext, useContext, useState } from 'react';

type FormValues = {
  isEdit: boolean;
  hasBG: boolean;
};

type FormSetter = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setHasBG: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormConfig = FormValues & FormSetter;

const FormConfigContext = createContext<FormConfig | null>(null);

export const FormConfigProvider = ({
  defaultValue,
  children,
}: ReactChildren & {
  defaultValue?: Partial<FormValues>;
}) => {
  const [isEdit, setIsEdit] = useState(defaultValue?.isEdit || false);
  const [hasBG, setHasBG] = useState(defaultValue?.hasBG || false);

  return (
    <FormConfigContext.Provider value={{ isEdit, hasBG, setHasBG, setIsEdit }}>
      {children}
    </FormConfigContext.Provider>
  );
};

export const useFormConfig = () => {
  const formConfig = useContext(FormConfigContext);
  if (!formConfig) throw new Error('FormConfigProvider not found');

  return formConfig;
};
