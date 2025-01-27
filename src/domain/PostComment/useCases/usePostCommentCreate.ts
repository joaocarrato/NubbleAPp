import { useState } from 'react';

import { postCommentService, PostComment } from '@domain';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}
export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError('Erro ao criar um comentário');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    createComment,
  };
}
