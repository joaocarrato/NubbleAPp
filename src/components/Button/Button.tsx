import React from 'react';
import { Text } from '../Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { buttonPresets } from './buttonPresets';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

export type ButtonPresets = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresets;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  disabled,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      {...$buttonStyle}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
      height={50}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

const $buttonStyle: TouchableOpacityBoxProps = {
  alignItems: 'center',
  justifyContent: 'center',
  px: 's20',
  borderRadius: 's16',
};
