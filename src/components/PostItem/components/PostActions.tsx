import React from 'react';

import { Post } from '@domain';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: Implemente like post
  }

  function navigateToComment() {
    //TODO: Implemente navigate to comment
  }

  function favoritePost() {
    //TODO: Implemente favorite post
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        icon={{ default: 'heart', marked: 'heartFill' }}
        text={favoriteCount}
      />

      <Item
        marked={false}
        onPress={navigateToComment}
        icon={{ default: 'comment', marked: 'comment' }}
        text={commentCount}
      />

      <Item
        marked={false}
        onPress={favoritePost}
        icon={{ default: 'bookmark', marked: 'bookmarkFill' }}
        text={reactionCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress?: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({ onPress, icon, marked, text }: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text ml="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
