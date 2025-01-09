import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from './useAppTheme';

export function useAppSafeArea() {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

  return {
    top: Math.max(top, spacing.s20),
  };
}
