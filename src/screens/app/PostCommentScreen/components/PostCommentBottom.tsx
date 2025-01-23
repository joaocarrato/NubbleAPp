import React from 'react';
import { Pressable } from 'react-native';

import { Text } from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
export function PostCommentBottom({ fetchNextPage, hasNextPage }: Props) {
  return (
    <Pressable onPress={fetchNextPage}>
      {hasNextPage && (
        <Text color="primary" bold textAlign="center">
          Ver mais
        </Text>
      )}
    </Pressable>
  );
}
