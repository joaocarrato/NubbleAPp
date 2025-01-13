import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Icon } from '../Icon/Icon';

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
