import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import { $textInputStyle } from '@components';
import { useAppTheme } from '@hooks';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}
export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const { colors } = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function inputFocus() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;
  return (
    <Pressable onPress={inputFocus}>
      <Box
        px="s16"
        py="s14"
        bg="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray1}
          style={[$textInputStyle, { color: colors.gray1 }]}
          {...rnTextInputProps}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
