import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteRequest = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (url) => {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return { message: "Post deleted successfully" };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    execute: (url) => mutation.mutateAsync(url),
    data: mutation.data,
    error: mutation.error,
    isLoading: mutation.isPending,
  };
};

export default useDeleteRequest;
