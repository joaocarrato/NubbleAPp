import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({ color, ...activityIndicator }: Props) {
  const { colors } = useAppTheme();
  return <RNActivityIndicator {...activityIndicator} color={colors[color]} />;
}
