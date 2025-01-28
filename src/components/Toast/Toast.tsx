import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast, hideToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 2000);
    }
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }
  return (
    <Box top={100} {...$toastStyle}>
      <Icon name="checkRound" color="success" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const $toastStyle: BoxProps = {
  backgroundColor: 'grayWhite',
  p: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  alignSelf: 'center',
  alignItems: 'center',
  position: 'absolute',
  maxWidth: MAX_WIDTH,
  opacity: 0.95,
  style: {...$shadowProps},
};
