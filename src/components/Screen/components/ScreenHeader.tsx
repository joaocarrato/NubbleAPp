import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Box, Icon, ScreenProps, Text, TouchableOpacityBox } from '@components';

const ICON_SIZE = 20;

type Props = Pick<ScreenProps, 'canGoBack' | 'title'>;
export function ScreenHeader({ canGoBack, title }: Props) {
  const navigation = useNavigation();
  return (
    <Box>
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          alignItems="center"
          justifyContent={title ? 'space-between' : undefined}
          mb="s24">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
          {title && <Text preset="headingSmall">{title}</Text>}
          {title && <Box width={ICON_SIZE} />}
        </TouchableOpacityBox>
      )}
    </Box>
  );
}
