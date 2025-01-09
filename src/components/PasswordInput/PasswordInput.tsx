import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Icon } from '../Icon/Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;
export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  function toggleSecurityTextEntry() {
    setIsSecurityTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecurityTextEntry}
      {...props}
      RightComponent={
        <Icon
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toggleSecurityTextEntry}
        />
      }
    />
  );
}
