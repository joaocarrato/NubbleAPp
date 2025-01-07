import React from 'react';
import { Text } from '../Text/Text';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../Box/Box';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading = false }: ButtonProps) {
  return (
    <Box {...$buttonStyle} height={50}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{ color: '#fff' }}>
          {title}
        </Text>
      )}
    </Box>
  );
}

const $buttonStyle: BoxProps<Theme> = {
  bg: 'buttonPrimary',
  alignItems: 'center',
  justifyContent: 'center',
  px: 's20',
  borderRadius: 's16',
};
