import React, { useState } from 'react';

import { Icon, TextInput, TextInputProps } from '@components';

type PasswordInputProps = Omit<
  TextInputProps,
  'rightComponent' | 'secureTextEntry'
>;
export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  function toggleSecurityTextEntry() {
    setIsSecurityTextEntry(prev => !prev);
  }
  return (
    <TextInput
      {...props}
      secureTextEntry={isSecurityTextEntry}
      rightComponent={
        <Icon
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toggleSecurityTextEntry}
        />
      }
    />
  );
}
