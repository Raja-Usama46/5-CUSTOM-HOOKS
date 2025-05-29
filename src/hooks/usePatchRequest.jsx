import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchRequest = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ url, body }) => {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    execute: (url, body) => mutation.mutateAsync({ url, body }),
    data: mutation.data,
    error: mutation.error,
    isLoading: mutation.isPending,
  };
};

export default usePatchRequest;
