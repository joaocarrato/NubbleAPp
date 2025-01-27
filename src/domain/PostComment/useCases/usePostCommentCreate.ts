import {postCommentService, PostComment} from '@domain';
import {MutationOptions, useMutation} from '@infra';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );
  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    loading,
    error,
    createComment,
  };
}
