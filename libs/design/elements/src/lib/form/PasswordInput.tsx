'use client';

import { Input, InputProps } from './Input';
import { Visibility, VisibilityOff } from '@li/design/icons';
import { useToggle } from '@li/design/hooks';
import { gs } from '@li/config/design';

export const PasswordInput = (props: InputProps) => {
  const [isVisible, toggle] = useToggle();

  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      iconRight={
        isVisible ? (
          <Visibility className={gs.clickable} onClick={() => toggle(false)} />
        ) : (
          <VisibilityOff
            className={gs.clickable}
            onClick={() => toggle(true)}
          />
        )
      }
    />
  );
};
