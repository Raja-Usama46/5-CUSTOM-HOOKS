import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostRequest = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ url, body }) => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    execute: (url, body) => mutation.mutate({ url, body }),
    data: mutation.data,
    error: mutation.error,
    isLoading: mutation.isPending,
  };
};

export default usePostRequest;
