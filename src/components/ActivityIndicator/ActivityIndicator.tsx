import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({ color, ...activityIndicator }: Props) {
  const { colors } = useAppTheme();
  return <RNActivityIndicator {...activityIndicator} color={colors[color]} />;
}
