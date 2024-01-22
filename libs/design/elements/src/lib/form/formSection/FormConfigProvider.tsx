'use client';

import { ReactChildren } from '@li/types/shared';
import { createContext, useContext, useEffect, useState } from 'react';

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
  isEdit: edit,
  hasBG: bg,
  children,
}: ReactChildren & Partial<FormValues>) => {
  const [isEdit, setIsEdit] = useState(false);
  const [hasBG, setHasBG] = useState(false);

  useEffect(() => {
    if (edit !== undefined) setIsEdit(edit);
    if (bg !== undefined) setHasBG(bg);
  }, [edit, bg]);

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
